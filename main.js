// i18n: textos em content/<lang>.json, chaves em data-i
const lang = (() => { try { return localStorage.getItem('lang') } catch { } })() || (navigator.language.startsWith('pt') ? 'pt' : 'en')
async function setLang(l) {
  const t = await (await fetch(`content/${l}.json`)).json()
  document.querySelectorAll('[data-i]').forEach(el => {
    el.innerHTML = el.dataset.i.split('.').reduce((o, k) => o[k], t)
  })
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
  document.getElementById('lang').textContent = l === 'pt' ? 'EN' : 'PT'
  try { localStorage.setItem('lang', l) } catch { }
}
setLang(lang)
document.getElementById('lang').onclick = () => setLang(document.documentElement.lang === 'en' ? 'pt' : 'en')

// Mangá: deitado → levanta (0–.25) → quadros se soltam em sequência; a janela (pôr do sol) cresce e vira o fundo do hero
const stage = document.querySelector('.stage'), book = document.querySelector('.book'), hero = document.querySelector('.hero')
const port = book.querySelector('.p-port'), rest = [...book.querySelectorAll('.pn')].filter(el => el !== port)
const clamp = v => Math.min(1, Math.max(0, v)), ease = t => t * t * (3 - 2 * t)
const still = matchMedia('(prefers-reduced-motion: reduce)').matches
let fly = []
function measure() {
  const bw = book.offsetWidth / 2, bh = book.offsetHeight / 2
  const at = el => [el.offsetLeft + el.offsetWidth / 2 - bw, el.offsetTop + el.offsetHeight / 2 - bh]
  fly = rest.map((el, i) => { const [x, y] = at(el), k = innerWidth / (Math.hypot(x, y) || 1); return [x * k, y * k, (i % 2 ? 1 : -1) * (25 + i * 9)] })
  const [x, y] = at(port)
  port.end = [-x, -y, Math.max(innerWidth / port.offsetWidth, innerHeight / port.offsetHeight) * 1.05]
}
function render() {
  const p = still ? 1 : clamp(-stage.getBoundingClientRect().top / (stage.offsetHeight - innerHeight))
  const tilt = 1 - ease(clamp(p / .25))
  book.style.transform = `rotateX(${58 * tilt}deg) rotateZ(${-22 * tilt}deg) scale(${.85 + .15 * (1 - tilt)})`
  book.style.background = `rgb(239 230 210 / ${1 - clamp((p - .26) / .06)})`
  rest.forEach((el, i) => {
    const t = ease(clamp((p - .28 - i * .06) / .3)), [x, y, r] = fly[i]
    el.style.transform = `translate3d(${x * t}px,${y * t}px,${400 * Math.sin(Math.PI * t)}px) rotate(${r * t}deg)`
  })
  const t = ease(clamp((p - .55) / .3)), [x, y, s] = port.end
  port.style.transform = `translate3d(${x * t}px,${y * t}px,1px) scale(${1 + (s - 1) * t})`
  hero.style.opacity = clamp((p - .85) / .1)
}
addEventListener('resize', () => { measure(); render() })
addEventListener('scroll', () => requestAnimationFrame(render), { passive: true })
measure(); render()
