// i18n: textos em content/<lang>.json; data-i = chave com pontos; legenda usa t.sec[<data-s>]
let t, cur = -1
const lang0 = (() => { try { return localStorage.getItem('lang') } catch { } })() || (navigator.language.startsWith('pt') ? 'pt' : 'en')
async function setLang(l) {
  t = await (await fetch(`content/${l}.json`)).json()
  document.querySelectorAll('[data-i]').forEach(el => { el.innerHTML = el.dataset.i.split('.').reduce((o, k) => o[k], t) })
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
  document.getElementById('lang').textContent = l === 'pt' ? 'EN' : 'PT'
  try { localStorage.setItem('lang', l) } catch { }
  cur = -1
  if (decks.length) deckLabel()
}
document.getElementById('lang').onclick = () => setLang(document.documentElement.lang === 'en' ? 'pt' : 'en')

// Câmera: paradas = visão geral + cada quadro com data-s. Scroll escolhe a parada; a câmera chega por mola amortecida (passa um pouco e assenta).
const stage = document.querySelector('.stage'), scene = document.querySelector('.scene'), book = document.querySelector('.book'), cap = document.querySelector('.cap')
const panels = [...book.querySelectorAll('[data-s]')].sort((a, b) => a.closest('.right') ? 1 : b.closest('.right') ? -1 : 0)
const leaves = [...book.querySelectorAll('.leaf')]  // ordem do DOM: de baixo p/ cima; a capa (última) vira primeiro
// reduzir movimento: sem 3D nem zoom contínuo; câmera pula de quadro em quadro com fade curto
const mq = matchMedia('(prefers-reduced-motion: reduce)')
let still = mq.matches; mq.onchange = e => { still = e.matches }
const clamp = v => Math.min(1, Math.max(0, v)), ease = u => u * u * u * (u * (6 * u - 15) + 10), mix = (a, b, u) => a + (b - a) * u
let keys = [], cam, vel = {}, lastP = 0, idle = 0
function measure() {
  const W = innerWidth, H = innerHeight, wide = W >= 900, cw = wide ? cap.offsetWidth + 48 : 0, ch = wide ? 0 : cap.offsetHeight + 16
  const ox = -cw / 2, oy = -ch / 2, fw = (W - cw) * (wide ? .85 : .92), fh = (H - ch) * .78
  keys = [
    { x: 600, y: 0, s: Math.min(W / 1200, H / 1600) * .8, rx: 38, rz: -4, ox: 0, oy: -ch / 3, o: 0 },  // livro fechado
    { x: 0, y: 0, s: Math.min(W / 2400, H / 1600) * .95, rx: 42, rz: -6, ox: 0, oy: -ch / 3, o: 1 }]   // aberto, visão geral
  panels.forEach((el, i) => {
    // verso da folha aparece espelhado de volta: x local = x no livro; página direita começa em 1200
    const w = el.offsetWidth, h = el.offsetHeight, base = el.closest('.right') ? 1200 : 0
    keys.push({ x: base + el.offsetLeft + w / 2 - 1200, y: el.offsetTop + h / 2 - 800,
      s: Math.min(fw / w, fh / h), rx: 20, rz: i % 2 ? 4 : -4, ox, oy, o: 1 })
  })
  stage.style.height = keys.length * 100 + 'svh'
  cam ??= { ...keys[0] }
  buildDecks()
}

// Baralho de prints: cartas empilhadas no centro do quadro; quando a câmera chega, saem uma de cima da outra e abrem em leque (x, y, z)
const decks = []
function buildDecks() {
  panels.forEach((el, i) => {
    const shots = t.sec[el.dataset.s].shots, k = keys[i + 2]
    if (!shots) return
    let dk = decks.find(d => d.key === i + 2)
    if (!dk) {
      const box = Object.assign(document.createElement('div'), { className: 'deck' })
      const cards = shots.map((sh, j) => {
        const c = Object.assign(document.createElement('figure'), { className: sh.tall ? 'card tall' : 'card' })
        c.innerHTML = `<img data-src="${sh.src}" alt="" decoding="async">`
        c.onclick = () => { dk.a = j; deckLabel() }
        box.append(c); return { el: c, p: { x: 0, y: 0, z: 0, ry: 0, rz: 0, s: .8, o: 0 } }
      })
      book.append(box)
      dk = { box, cards, key: i + 2, a: 0, d: 0, s: el.dataset.s }
      decks.push(dk)
    }
    dk.box.style.left = k.x + 1200 + 'px'; dk.box.style.top = k.y + 800 + 'px'
    dk.box.style.setProperty('--cw', Math.min(el.offsetWidth * .8, el.offsetHeight * 1.15) + 'px')  // carta cabe no quadro
  })
}
function deckOf(n) { return decks.find(d => d.key === n) }
function deckLabel() {
  const dk = deckOf(cur), ui = cap.querySelector('.deck-ui')
  ui.hidden = !dk
  if (dk) { const sh = t.sec[dk.s].shots; cap.querySelector('#deck-l').textContent = `${sh[dk.a].t}, ${dk.a + 1} ${t.ui.of} ${sh.length}` }
}
function step(dir) { const dk = deckOf(cur); if (dk) { dk.a = (dk.a + dir + dk.cards.length) % dk.cards.length; deckLabel() } }
document.getElementById('prev').onclick = () => step(-1)
document.getElementById('next').onclick = () => step(1)
addEventListener('keydown', e => { if (e.key === 'ArrowRight') step(1); if (e.key === 'ArrowLeft') step(-1) })
function renderDecks(n, P, steps) {
  const lerp = k => still ? 1 : 1 - (1 - k) ** steps
  for (const dk of decks) {
    const near = still ? +(n === dk.key) : ease(1 - clamp(Math.abs(P - dk.key) / .55))
    dk.d += (near - dk.d) * lerp(.12)
    if (dk.d < .001 && near === 0) { if (dk.cards[0].p.o > .001) dk.cards.forEach(c => { c.p.o = 0; c.el.style.opacity = 0 }); continue }
    const N = dk.cards.length
    dk.cards.forEach((c, j) => {
      const img = c.el.firstChild; if (!img.src) img.src = img.dataset.src  // só baixa o print quando o baralho começa a abrir
      const rel = (j - dk.a + N) % N, f = ease(clamp(dk.d * 1.5 - rel * .12))  // rel 0 = carta da frente; as de trás saem depois
      const g = still
        ? { x: 0, y: 0, z: 0, ry: 0, rz: 0, s: 1, o: rel ? 0 : f }
        : { x: rel * 46 * f, y: -rel * 34 * f, z: (130 - rel * 55) * f, ry: -rel * 8 * f, rz: (rel ? (rel % 2 ? 3 : -2) : -1.5) * f, s: .8 + .2 * f, o: f * Math.max(0, 1 - rel * .3) }
      for (const q in g) c.p[q] += (g[q] - c.p[q]) * lerp(.14)
      const p = c.p
      c.el.style.transform = `translate(-50%,-50%) translate3d(${p.x}px,${p.y}px,${p.z}px) rotateY(${p.ry}deg) rotateZ(${p.rz}deg) scale(${p.s})`
      c.el.style.opacity = p.o
      c.el.style.pointerEvents = p.o > .5 ? 'auto' : 'none'
    })
  }
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
function caption(n) {
  if (n === cur || !t) return
  cur = n; cap.classList.add('out')
  panels.forEach((el, i) => i <= n && el.classList.add('on'))  // carrega a arte deste quadro e dos 2 seguintes (n conta 2 paradas antes dos quadros)
  setTimeout(() => {
    const s = t.sec[n > 1 ? panels[n - 2].dataset.s : 'intro']
    cap.querySelector('#cap-k').textContent = s.k; cap.querySelector('#cap-t').innerHTML = s.t; cap.querySelector('#cap-b').innerHTML = s.b
    cap.classList.remove('out'); deckLabel()
  }, still ? 0 : 250)
}
let shown = -1, last = 0
function frame(now) {
  const steps = Math.min(4, Math.max(1, Math.round((now - (last || now - 16.7)) / 16.7)))  // quadros perdidos viram passos extras: mesma velocidade a 30 ou 120 fps
  last = now
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
    el.style.transform = `translateZ(${mix(d + 1, j + 1, f) * 1.5 + Math.sin(Math.PI * f) * 90}px) rotateY(${-180 * f}deg)`
  })
  caption(n)
  renderDecks(n, P, steps)
  requestAnimationFrame(frame)
}
addEventListener('resize', measure)
setLang(lang0).then(() => { measure(); requestAnimationFrame(frame) })
