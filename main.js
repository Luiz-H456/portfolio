// i18n: textos em content/<lang>.json; data-i = chave com pontos; legenda usa t.sec[<data-s>]
let t, cur = -1
// altura estável: 100svh não muda quando a barra do navegador do celular some/aparece (innerHeight muda e fazia a tela tremer)
const probe = Object.assign(document.createElement('div'), { style: 'position:fixed;width:0;height:100svh;visibility:hidden;pointer-events:none' })
document.body.append(probe)
const vh = () => probe.offsetHeight
const lang0 = location.pathname.startsWith('/en') ? 'en' : (() => { try { return localStorage.getItem('lang') } catch { } })() || (navigator.language.startsWith('pt') ? 'pt' : 'en')
async function setLang(l) {
  t = await (await fetch(`content/${l}.json`)).json()
  document.querySelectorAll('[data-i]').forEach(el => { el.innerHTML = el.dataset.i.split('.').reduce((o, k) => o[k], t) })
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
  document.getElementById('lang').textContent = l === 'pt' ? 'EN' : 'PT'
  try { localStorage.setItem('lang', l) } catch { }
  if (chap) fillChap(chap.s)
  if (keys.length) buildToc()
  cur = -1
}
document.getElementById('lang').onclick = () => setLang(document.documentElement.lang === 'en' ? 'pt' : 'en')

// Câmera: paradas = livro fechado, visão geral e cada quadro com data-s; com capítulo aberto, os quadros dele entram logo após o projeto.
// O scroll escolhe a parada; a câmera chega por mola amortecida.
const stage = document.querySelector('.stage'), scene = document.querySelector('.scene'), book = document.querySelector('.book'), cap = document.querySelector('.cap')
const capBtn = document.getElementById('chap-b'), cL = document.getElementById('cL'), cR = document.getElementById('cR'), cX = document.getElementById('cx'), mainLeaf = book.querySelector('.leaf.main')
const panels = [...book.querySelectorAll('.pn[data-s]')].sort((a, b) => a.closest('.right') ? 1 : b.closest('.right') ? -1 : 0)
const leaves = [...book.querySelectorAll('.leaf:not(.main)')]  // ordem do DOM: de baixo p/ cima; a capa (última) vira primeiro
// reduzir movimento: sem 3D nem zoom contínuo; câmera pula de quadro em quadro com fade curto
const mq = matchMedia('(prefers-reduced-motion: reduce)')
let still = mq.matches; mq.onchange = e => { still = e.matches }
const clamp = v => Math.min(1, Math.max(0, v)), ease = u => u * u * u * (u * (6 * u - 15) + 10), mix = (a, b, u) => a + (b - a) * u
let keys = [], meta = [], cam, vel = {}, lastP = 0, idle = 0, chap = null, cf = 0
const chapShots = () => [...book.querySelectorAll('#cL [data-c],#cR [data-c],#cx [data-c]')].filter(c => +c.dataset.c >= 0).sort((a, b) => a.dataset.c - b.dataset.c)
const chapLen = () => chapShots().length + 2  // +2: visão das 2 páginas e título
let xl = []  // folhas extras do capítulo: { el, f }
function measure() {
  const W = innerWidth, H = vh(), wide = W >= 900 || (W > H && W >= 600), cw = wide ? cap.offsetWidth + 48 : 0, ch = wide ? 0 : H * .42 + 16  // celular: reserva a altura máxima da legenda (CSS 42svh)
  const ox = -cw / 2, oy = -ch / 2, fw = (W - cw) * (wide ? .85 : .92), fh = (H - ch) * .78
  // verso de folha aparece espelhado de volta: x local = x no livro; páginas da direita começam em 1200
  const stop = (el, i, rx) => {
    const w = el.offsetWidth, h = el.offsetHeight, base = el.closest('.right,.cright,.rp') ? 1200 : 0
    return { x: base + el.offsetLeft + w / 2 - 1200, y: el.offsetTop + h / 2 - 800, s: Math.min(fw / w, fh / h), rx, rz: i % 2 ? 4 : -4, ox, oy, o: 1 }
  }
  keys = [
    { x: 600, y: 0, s: Math.min((W - cw) / 1200, (H - ch) / 1600) * .8, rx: 38, rz: -4, ox, oy, o: 0 },  // livro fechado
    { x: 0, y: 0, s: Math.min((W - cw) / 2400, (H - ch) / 1600) * .95, rx: 42, rz: -6, ox, oy, o: 1 }]   // aberto, visão geral
  meta = [{ s: 'intro' }, { s: 'intro' }]
  panels.forEach((el, i) => {
    keys.push(stop(el, i, 20)); meta.push({ s: el.dataset.s })
    if (chap?.s !== el.dataset.s) return
    chap.at = keys.length - 1
    keys.push({ ...keys[1], s: keys[1].s * 1.05, rx: 30, rz: -3 }); meta.push({ s: chap.s, shot: -1, sp: 1 })  // capítulo aberto inteiro, sem zoom
    keys.push(stop(cL.firstElementChild, 1, 14)); meta.push({ s: chap.s, shot: -1, sp: 1 })  // foco no título do projeto
    chapShots().forEach((c, j) => { keys.push(stop(c, j, 12)); meta.push({ s: chap.s, shot: +c.dataset.c, sp: +c.dataset.sp }) })  // inclinação menor: print legível
  })
  // fim: câmera se afasta, o livro se fecha e volta à capa (igual à parada 0; ao chegar, o scroll volta ao topo sem corte)
  keys.push({ ...keys[1], s: keys[1].s * .85, rx: 46 }, { ...keys[1], x: 300, s: keys[1].s * .7, rx: 50, rz: -10, o: .45 }, { ...keys[0] })
  meta.push({ s: 'fim' }, { s: 'fim' }, { s: 'intro' })
  stage.style.height = keys.length * 100 + 'svh'
  cam ??= { ...keys[0] }
}
function target() {
  const P = Math.min(keys.length - 1, Math.max(0, scrollY / vh()))  // scrollY fica negativo no "elástico" do Mac/iPhone
  if (still) { const i = Math.round(P); return [{ ...keys[i], rx: 0, rz: 0, o: 1 }, i, P] }
  const i = Math.floor(P), a = keys[i], b = keys[i + 1] || a
  const u = ease(clamp((P - i - .2) / .8)), arc = Math.sin(Math.PI * u)
  const k = {}; for (const p in a) k[p] = mix(a[p], b[p], u)
  k.s *= 1 - .22 * arc; k.rx += 8 * arc  // recua um pouco no meio da viagem: os quadros vizinhos aparecem
  return [k, u < .5 ? i : i + 1, P]
}

// Capítulo: a página direita vira (folha .main); o verso e a página de baixo mostram os quadros do projeto.
// Quadro = print (src), "por dentro" (in: número, problema, decisões, fluxo) ou código/texto (code). Ao rolar além do último, volta e segue.
const inside = d => `<p class="kick">${t.ui.inside}</p><b class="num">${d.num}</b><p class="numl">${d.numl}</p><p>${d.prob}</p><ul>${d.dec.map(x => `<li>${x}</li>`).join('')}</ul>${d.flow ? `<p class="flow">${d.flow.map(x => `<span>${x}</span>`).join('<i>→</i>')}</p>` : ''}`
const body = it => it.src ? `<img src="${it.src}" alt="${it.t}" decoding="async"><p class="cn">${it.n}</p>`
  : it.in ? inside(it.in) : it.code ? `<pre>${it.code}</pre><p class="cn">${it.n}</p>` : `<div class="hx">${it.html}</div><p class="cn">${it.n}</p>`
// páginas: L/R = 1ª dupla, L2/R2 = 2ª... L1 é o verso da folha principal, a última R fica embaixo (#cR),
// cada dupla intermediária é uma folha extra: frente = R da dupla, verso = L da seguinte
function fillChap(s) {
  const sec = t.sec[s], c = sec.chap, pg = {}
  const add = (p, h) => (pg[p] ??= []).push(h)
  add('L', `<div class="pn chead" data-c="-1" style="grid-area:1/1/3/7"><span class="kick">${sec.k}</span><b class="display">${sec.t}</b>${sec.b.match(/<p class="tools">.*?<\/p>/)?.[0] || ''}</div>`)
  c.items.forEach((it, j) => add(it.p, `<div class="pn ${it.src ? 'cp' : it.in ? 'cin' : 'ccode'}${it.tall ? ' tall' : ''}" data-c="${j}" data-sp="${+it.p.slice(1) || 1}" style="grid-area:${it.a}">${body(it)}</div>`))
  const S = Math.max(...c.items.map(it => +it.p.slice(1) || 1)), R = n => n > 1 ? 'R' + n : 'R', L = n => n > 1 ? 'L' + n : 'L'
  if (c.art) add(c.artp || R(S), `<div class="pn art on a-${s} c-${CAP[s][0]}" style="grid-area:${c.art}"></div>`)
  const html = p => (pg[p] || []).join('')
  cL.innerHTML = html('L'); cR.innerHTML = html(R(S))
  cX.innerHTML = Array.from({ length: S - 1 }, (_, i) => `<div class="leaf"><div class="face front page rp">${html(R(i + 1))}</div><div class="face back page">${html(L(i + 2))}</div></div>`).join('')
  xl = [...cX.children].map(el => ({ el, f: 0 }))
}
function openChap(s) {
  if (!t.sec[s].chap || chap) return
  fillChap(s); chap = { s }; measure(); cur = -1
  scrollTo({ top: (chap.at + 1) * vh(), behavior: still ? 'instant' : 'smooth' })
}
// how: 'next' segue p/ o próximo projeto, 'back' volta ao quadro do projeto, 'up' fecha onde está (rolou para cima)
function closeChap(how) {
  const n = chapLen(), at = chap.at
  const y = how === 'next' ? scrollY - n * vh() : how === 'back' ? at * vh() : scrollY
  chap = null; measure(); cur = -1
  scrollTo({ top: y, behavior: 'instant' })
}
capBtn.onclick = () => chap ? closeChap('back') : t.sec[meta[cur].s].chap ? openChap(meta[cur].s) : scrollTo({ top: 0, behavior: still ? 'instant' : 'smooth' })
// teclado: ↓/PageDown/espaço avançam uma parada, ↑/PageUp voltam, Home volta à capa, Esc fecha o capítulo
let kt = null  // destino pendente: toques rápidos somam em vez de repetir a mesma parada
const go = i => { kt = Math.max(0, Math.min(keys.length - 1, i)); scrollTo({ top: kt * vh(), behavior: still ? 'instant' : 'smooth' }) }
addEventListener('keydown', e => {
  if (e.key === 'Escape' && chap) return closeChap('back')
  if (e.target.closest?.('button,a,input')) return
  const P = kt ?? Math.round(scrollY / vh()), d = { ArrowDown: 1, PageDown: 1, ' ': 1, ArrowUp: -1, PageUp: -1 }[e.key]
  if (d) { e.preventDefault(); go(P + d) } else if (e.key === 'Home') { e.preventDefault(); go(0) }
})
// aviso do início: some ao rolar; clicar nele (ou na capa) abre o livro
const hint = document.getElementById('hint')
hint.onclick = book.querySelector('.cover').onclick = () => go(1)
addEventListener('scroll', () => hint.classList.toggle('off', scrollY > 20), { passive: true })
// índice no topo: pula direto para um quadro (fecha o capítulo aberto antes)
const toc = document.getElementById('toc')
function buildToc() {
  toc.innerHTML = panels.map((el, i) => `<button data-i="${i}">${el.dataset.s === 'hero' ? t.ui.home : el.querySelector('b').textContent}</button>`).join('')
  toc.querySelectorAll('button').forEach(b => b.onclick = () => { if (chap) closeChap('up'); go(+b.dataset.i + 2) })
}
panels.forEach((el, i) => {
  if (el.querySelector('.go')) el.classList.add('has-chap')
  el.onclick = () => { const s = el.dataset.s; if (!t.sec[s].chap) return go(i + 2); meta[cur]?.s === s ? openChap(s) : scrollTo({ top: (i + 2) * vh(), behavior: 'smooth' }) }
})

// cor da legenda = cor do quadro (fundo, texto)
const CAP = { intro: ['rust', 'black'], fim: ['rust', 'black'], ic: ['sky', 'black'], metodo: ['violet', 'cream'], hero: ['mustard', 'black'], sobre: ['rust', 'black'], erp: ['blue', 'cream'], botezini: ['red', 'cream'],
  lojas: ['mustard', 'black'], barbearia: ['sky', 'black'], stack: ['green', 'cream'], contato: ['cream', 'black'] }
function caption(n) {
  if (n === cur || !t || !meta[n]) return
  cur = n; cap.classList.add('out')
  panels.forEach((el, i) => { i <= n && el.classList.add('on'); el.classList.toggle('here', !chap && el.dataset.s === meta[n].s) })  // arte até 2 quadros à frente; .here = quadro atual
  setTimeout(() => {
    const m = meta[n], sec = t.sec[m.s], it = m.shot >= 0 ? sec.chap.items[m.shot] : null, [cb, cf] = CAP[m.s]
    cap.style.setProperty('--cb', `var(--${cb})`); cap.style.setProperty('--cf', `var(--${cf})`)
    cap.querySelector('#cap-k').textContent = sec.k
    cap.querySelector('#cap-t').innerHTML = it ? it.t : sec.t
    cap.querySelector('#cap-b').innerHTML = !it ? sec.b : it.in ? `<p>${it.in.prob}</p><ul>${it.in.dec.map(x => `<li>${x}</li>`).join('')}</ul>` : `<p>${it.n}</p>`
    const top = m.s === 'contato' || m.s === 'fim'
    toc.querySelectorAll('button').forEach(b => b.toggleAttribute('aria-current', panels[b.dataset.i].dataset.s === m.s))
    capBtn.hidden = !sec.chap && !top; capBtn.textContent = chap ? t.ui.back : sec.chap ? t.ui.open : t.ui.top
    cap.classList.remove('out')
  }, still ? 0 : 250)
}
let shown = -1, last = 0
function frame(now) {
  const steps = Math.min(4, Math.max(1, Math.round((now - (last || now - 16.7)) / 16.7)))  // quadros perdidos viram passos extras: mesma velocidade a 30 ou 120 fps
  last = now
  if (chap) {  // saiu do capítulo rolando: para baixo a página vira já, mas o scroll só é reajustado parado (rolagem suave do navegador ainda mira a posição antiga)
    const P = scrollY / vh(), end = chap.at + chapLen()
    if (P < chap.at - .5) closeChap('up')
    else { chap.leaving = P > end + .3; if (chap.leaving && idle > 15) closeChap('next') }
  }
  if (!chap && idle > 20 && scrollY / vh() >= keys.length - 1.02) scrollTo({ top: 0, behavior: 'instant' })  // chegou na capa e parou: recomeça
  const [k, n, P] = target()
  if (still && n !== shown) { scene.classList.add('dip'); setTimeout(() => scene.classList.remove('dip'), 150) }
  shown = n
  idle = Math.abs(P - lastP) > 1e-4 ? 0 : idle + 1
  if (idle > 10) kt = null
  // viajando (ou pausa curta entre cliques da roda): quase crítico, ~1%; parado ~150 ms: uma passada de ~5,6% e assenta
  const [d, r] = idle < 9 ? [.55, .1] : [.72, .05]
  lastP = P
  for (let i = 0; i < steps; i++) for (const p in k) {
    if (still) { cam[p] = k[p]; continue }
    vel[p] = (vel[p] || 0) * d + (k[p] - cam[p]) * r
    cam[p] += vel[p]
  }
  book.style.transform = `translate(${cam.ox}px,${cam.oy}px) rotateX(${cam.rx}deg) rotateZ(${cam.rz}deg) scale(${cam.s}) translate(${-cam.x}px,${-cam.y}px)`
  book.style.willChange = idle < 40 ? 'transform' : 'auto'  // camada só durante o movimento; parado, redesenha nítido
  const L = leaves.length
  leaves.forEach((el, d) => {
    const j = L - 1 - d, f = ease(clamp((cam.o - j * .16) / .52))  // j: ordem de virada (capa = 0)
    el.style.transform = `translateZ(${mix(d + 1, j + 1, f) * 1.5}px) rotateY(${-180 * f}deg)`  // borda presa na lombada: só gira, não sobe
  })
  const open = chap && !chap.leaving
  cf = still ? +!!open : clamp(cf + (open ? 1 : -1) * steps * 16.7 / 900)  // virada do capítulo: 0,9 s, acelera e freia por igual
  const f = ease(cf)
  mainLeaf.style.transform = `translateZ(${mix(.75, 8, f)}px) rotateY(${-180 * f}deg)`  // virada: fica acima da página esquerda principal
  const sp = open ? meta[n]?.sp || 1 : 0
  xl.forEach((x, i) => {  // folha i vira quando a câmera passa para a dupla i+2; empilha abaixo da principal à direita e acima dela à esquerda
    x.f = still ? +(sp > i + 1) : clamp(x.f + (sp > i + 1 ? 1 : -1) * steps * 16.7 / 900)
    const g = ease(x.f)
    x.el.style.transform = `translateZ(${mix(-2 - 2 * i, 10 + 2 * i, g)}px) rotateY(${-180 * g}deg)`
  })
  caption(n)
  requestAnimationFrame(frame)
}
let w0 = innerWidth
addEventListener('resize', () => { if (matchMedia('(pointer:coarse)').matches && innerWidth === w0) return; w0 = innerWidth; measure() })  // celular: só a barra do navegador mudou, nada a refazer
setLang(lang0).then(() => { measure(); buildToc(); requestAnimationFrame(frame) })
