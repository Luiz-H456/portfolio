// i18n: textos em content/<lang>.json; data-i = chave com pontos; legenda usa t.sec[<data-s>]
let t, cur = -1
const lang0 = (() => { try { return localStorage.getItem('lang') } catch { } })() || (navigator.language.startsWith('pt') ? 'pt' : 'en')
async function setLang(l) {
  t = await (await fetch(`content/${l}.json`)).json()
  document.querySelectorAll('[data-i]').forEach(el => { el.innerHTML = el.dataset.i.split('.').reduce((o, k) => o[k], t) })
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
  document.getElementById('lang').textContent = l === 'pt' ? 'EN' : 'PT'
  try { localStorage.setItem('lang', l) } catch { }
  if (chap) fillChap(chap.s)
  cur = -1
}
document.getElementById('lang').onclick = () => setLang(document.documentElement.lang === 'en' ? 'pt' : 'en')

// Câmera: paradas = livro fechado, visão geral e cada quadro com data-s; com capítulo aberto, os quadros dele entram logo após o projeto.
// O scroll escolhe a parada; a câmera chega por mola amortecida.
const stage = document.querySelector('.stage'), scene = document.querySelector('.scene'), book = document.querySelector('.book'), cap = document.querySelector('.cap')
const capBtn = document.getElementById('chap-b'), cL = document.getElementById('cL'), cR = document.getElementById('cR'), mainLeaf = book.querySelector('.leaf.main')
const panels = [...book.querySelectorAll('.pn[data-s]')].sort((a, b) => a.closest('.right') ? 1 : b.closest('.right') ? -1 : 0)
const leaves = [...book.querySelectorAll('.leaf:not(.main)')]  // ordem do DOM: de baixo p/ cima; a capa (última) vira primeiro
// reduzir movimento: sem 3D nem zoom contínuo; câmera pula de quadro em quadro com fade curto
const mq = matchMedia('(prefers-reduced-motion: reduce)')
let still = mq.matches; mq.onchange = e => { still = e.matches }
const clamp = v => Math.min(1, Math.max(0, v)), ease = u => u * u * u * (u * (6 * u - 15) + 10), mix = (a, b, u) => a + (b - a) * u
let keys = [], meta = [], cam, vel = {}, lastP = 0, idle = 0, chap = null, cf = 0
const chapShots = () => [...cL.children, ...cR.children].filter(c => +c.dataset.c >= 0), chapLen = () => chapShots().length + 1  // +1: visão das 2 páginas
function measure() {
  const W = innerWidth, H = innerHeight, wide = W >= 900, cw = wide ? cap.offsetWidth + 48 : 0, ch = wide ? 0 : H * .42 + 16  // celular: reserva a altura máxima da legenda (CSS 42svh)
  const ox = -cw / 2, oy = -ch / 2, fw = (W - cw) * (wide ? .85 : .92), fh = (H - ch) * .78
  // verso de folha aparece espelhado de volta: x local = x no livro; páginas da direita começam em 1200
  const stop = (el, i, rx) => {
    const w = el.offsetWidth, h = el.offsetHeight, base = el.closest('.right,.cright') ? 1200 : 0
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
    keys.push({ ...keys[1], s: keys[1].s * 1.05, rx: 30, rz: -3 }); meta.push({ s: chap.s, shot: -1 })  // capítulo aberto inteiro, sem zoom
    chapShots().forEach((c, j) => { keys.push(stop(c, j, 12)); meta.push({ s: chap.s, shot: +c.dataset.c }) })  // inclinação menor: print legível
  })
  stage.style.height = keys.length * 100 + 'svh'
  cam ??= { ...keys[0] }
}
function target() {
  const P = Math.min(keys.length - 1, scrollY / innerHeight)
  if (still) { const i = Math.round(P); return [{ ...keys[i], rx: 0, rz: 0, o: 1 }, i, P] }
  const i = Math.floor(P), a = keys[i], b = keys[i + 1] || a
  const u = ease(clamp((P - i - .2) / .8)), arc = Math.sin(Math.PI * u)
  const k = {}; for (const p in a) k[p] = mix(a[p], b[p], u)
  k.s *= 1 - .22 * arc; k.rx += 8 * arc  // recua um pouco no meio da viagem: os quadros vizinhos aparecem
  return [k, u < .5 ? i : i + 1, P]
}

// Capítulo: a página direita vira (folha .main); o verso e a página de baixo mostram os prints do projeto como quadros.
// Ao rolar além do último quadro, a página volta e a câmera segue para o próximo projeto.
function fillChap(s) {
  const sec = t.sec[s], L = [], R = []
  L.push(`<div class="pn chead" data-c="-1" style="grid-area:1/1/3/7"><span class="kick">${sec.k}</span><b class="display">${sec.t}</b>${sec.b.match(/<p class="tools">.*?<\/p>/)?.[0] || ''}</div>`)
  sec.shots.forEach((sh, j) => (sh.p === 'L' ? L : R).push(
    `<div class="pn cp${sh.tall ? ' tall' : ''}" data-c="${j}" style="grid-area:${sh.a}"><img src="${sh.src}" alt="${sh.t}" decoding="async"><p class="cn">${sh.n}</p></div>`))
  R.push(`<div class="pn art on a-${s} c-${CAP[s][0]}" style="grid-area:${sec.chap.art}"></div>`)
  cL.innerHTML = L.join(''); cR.innerHTML = R.join('')
}
function openChap(s) {
  if (!t.sec[s].shots || chap) return
  fillChap(s); chap = { s }; measure(); cur = -1
  scrollTo({ top: (chap.at + 1) * innerHeight, behavior: still ? 'instant' : 'smooth' })
}
// how: 'next' segue p/ o próximo projeto, 'back' volta ao quadro do projeto, 'up' fecha onde está (rolou para cima)
function closeChap(how) {
  const n = chapLen(), at = chap.at
  const y = how === 'next' ? scrollY - n * innerHeight : how === 'back' ? at * innerHeight : scrollY
  chap = null; measure(); cur = -1
  scrollTo({ top: y, behavior: 'instant' })
}
capBtn.onclick = () => chap ? closeChap('back') : openChap(meta[cur].s)
addEventListener('keydown', e => { if (e.key === 'Escape' && chap) closeChap('back') })
panels.forEach((el, i) => {
  if (el.querySelector('.go')) el.classList.add('has-chap')
  el.onclick = () => { const s = el.dataset.s; if (!t.sec[s].shots) return; meta[cur]?.s === s ? openChap(s) : scrollTo({ top: (i + 2) * innerHeight, behavior: 'smooth' }) }
})

// cor da legenda = cor do quadro (fundo, texto)
const CAP = { intro: ['rust', 'black'], hero: ['mustard', 'black'], sobre: ['rust', 'black'], erp: ['blue', 'cream'], botezini: ['red', 'cream'],
  lojas: ['mustard', 'black'], barbearia: ['sky', 'black'], stack: ['green', 'cream'], contato: ['cream', 'black'] }
function caption(n) {
  if (n === cur || !t) return
  cur = n; cap.classList.add('out')
  panels.forEach((el, i) => { i <= n && el.classList.add('on'); el.classList.toggle('here', !chap && el.dataset.s === meta[n].s) })  // arte até 2 quadros à frente; .here = quadro atual
  setTimeout(() => {
    const m = meta[n], sec = t.sec[m.s], sh = m.shot >= 0 ? sec.shots[m.shot] : null, [cb, cf] = CAP[m.s]
    cap.style.setProperty('--cb', `var(--${cb})`); cap.style.setProperty('--cf', `var(--${cf})`)
    cap.querySelector('#cap-k').textContent = sec.k
    cap.querySelector('#cap-t').innerHTML = sh ? sh.t : sec.t
    cap.querySelector('#cap-b').innerHTML = sh ? `<p>${sh.n}</p>` : sec.b
    capBtn.hidden = !sec.shots; capBtn.textContent = chap ? t.ui.back : t.ui.open
    cap.classList.remove('out')
  }, still ? 0 : 250)
}
let shown = -1, last = 0
function frame(now) {
  const steps = Math.min(4, Math.max(1, Math.round((now - (last || now - 16.7)) / 16.7)))  // quadros perdidos viram passos extras: mesma velocidade a 30 ou 120 fps
  last = now
  if (chap) {  // saiu do capítulo rolando: para baixo segue p/ o próximo projeto, para cima fecha
    const P = scrollY / innerHeight, end = chap.at + chapLen()
    if (P > end + .5) closeChap('next'); else if (P < chap.at - .5) closeChap('up')
  }
  const [k, n, P] = target()
  if (still && n !== shown) { scene.classList.add('dip'); setTimeout(() => scene.classList.remove('dip'), 150) }
  shown = n
  idle = Math.abs(P - lastP) > 1e-4 ? 0 : idle + 1
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
  cf = still ? +!!chap : clamp(cf + (chap ? 1 : -1) * steps * 16.7 / 900)  // virada do capítulo: 0,9 s, acelera e freia por igual
  const f = ease(cf)
  mainLeaf.style.transform = `translateZ(${mix(.75, 8, f)}px) rotateY(${-180 * f}deg)`  // virada: fica acima da página esquerda principal
  caption(n)
  requestAnimationFrame(frame)
}
addEventListener('resize', measure)
setLang(lang0).then(() => { measure(); requestAnimationFrame(frame) })
