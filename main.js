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

// Câmera: paradas = visão geral + cada quadro com data-s. Scroll escolhe a parada; a câmera persegue com inércia e balanço leve.
const stage = document.querySelector('.stage'), book = document.querySelector('.book'), cap = document.querySelector('.cap')
const panels = [...book.querySelectorAll('[data-s]')]
const still = matchMedia('(prefers-reduced-motion: reduce)').matches
const clamp = v => Math.min(1, Math.max(0, v)), ease = u => u * u * u * (u * (6 * u - 15) + 10), mix = (a, b, u) => a + (b - a) * u
let keys = [], cam
function measure() {
  const W = innerWidth, H = innerHeight, wide = W >= 900, cw = wide ? cap.offsetWidth + 48 : 0, ch = wide ? 0 : cap.offsetHeight + 16
  const ox = -cw / 2, oy = -ch / 2, fw = (W - cw) * (wide ? .85 : .92), fh = (H - ch) * .78
  keys = [{ x: 0, y: 0, s: Math.min(W / 2400, H / 1600) * .8, rx: 55, rz: -18, ox: 0, oy: -ch / 3 }]
  panels.forEach((el, i) => {
    const pg = el.parentElement, w = el.offsetWidth, h = el.offsetHeight
    keys.push({ x: pg.offsetLeft + el.offsetLeft + w / 2 - 1200, y: pg.offsetTop + el.offsetTop + h / 2 - 800,
      s: Math.min(fw / w, fh / h), rx: 20, rz: i % 2 ? 4 : -4, ox, oy })
  })
  stage.style.height = keys.length * 100 + 'svh'
  cam ??= { ...keys[0] }
}
function target() {
  const P = Math.min(keys.length - 1, scrollY / innerHeight), i = Math.floor(P), a = keys[i], b = keys[i + 1] || a
  const u = ease(clamp((P - i - .2) / .8)), arc = Math.sin(Math.PI * u)
  const k = {}; for (const p in a) k[p] = mix(a[p], b[p], u)
  k.s *= 1 - .4 * arc; k.rx += 14 * arc  // afasta e inclina no meio da viagem: o mangá aparece inteiro
  return [k, u < .5 ? i : i + 1]
}
function caption(n) {
  if (n === cur || !t) return
  cur = n; cap.classList.add('out')
  setTimeout(() => {
    const s = t.sec[n ? panels[n - 1].dataset.s : 'intro']
    cap.querySelector('#cap-k').textContent = s.k; cap.querySelector('#cap-t').innerHTML = s.t; cap.querySelector('#cap-b').innerHTML = s.b
    cap.classList.remove('out')
  }, still ? 0 : 250)
}
function frame(ms) {
  const [k, n] = target(), f = still ? 1 : .08, sw = still ? 0 : ms / 1000
  for (const p in k) cam[p] += (k[p] - cam[p]) * f
  book.style.transform = `translate(${cam.ox}px,${cam.oy}px) rotateX(${cam.rx + Math.sin(sw * .5) * 1.5}deg) rotateZ(${cam.rz + Math.sin(sw * .37) * .8}deg) scale(${cam.s}) translate(${-cam.x}px,${-cam.y}px)`
  caption(n)
  requestAnimationFrame(frame)
}
addEventListener('resize', measure)
setLang(lang0).then(() => { measure(); requestAnimationFrame(frame) })
