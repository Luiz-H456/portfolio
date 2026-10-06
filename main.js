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
    cap.classList.remove('out')
  }, still ? 0 : 250)
}
let shown = -1
function frame() {
  const [k, n, P] = target()
  if (still && n !== shown) { scene.classList.add('dip'); setTimeout(() => scene.classList.remove('dip'), 150) }
  shown = n
  idle = Math.abs(P - lastP) > 1e-4 ? 0 : idle + 1
  // viajando (ou pausa curta entre cliques da roda): quase crítico, ~1%; parado ~150 ms: uma passada de ~5,6% e assenta
  const [d, r] = idle < 9 ? [.55, .1] : [.72, .05]
  lastP = P
  for (const p in k) {
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
  requestAnimationFrame(frame)
}
addEventListener('resize', measure)
setLang(lang0).then(() => { measure(); requestAnimationFrame(frame) })
