// i18n: textos em content/<lang>.json, chaves em data-i
const lang = (localStorage.getItem('lang') || (navigator.language.startsWith('pt') ? 'pt' : 'en'))
async function setLang(l) {
  const t = await (await fetch(`content/${l}.json`)).json()
  document.querySelectorAll('[data-i]').forEach(el => {
    el.innerHTML = el.dataset.i.split('.').reduce((o, k) => o[k], t)
  })
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en'
  document.getElementById('lang').textContent = l === 'pt' ? 'EN' : 'PT'
  localStorage.setItem('lang', l)
}
setLang(lang)
document.getElementById('lang').onclick = () => setLang(document.documentElement.lang === 'en' ? 'pt' : 'en')

// Fundo: fbm com domain warping, tinta azul sobre papel, desvia do mouse
const c = document.getElementById('bg'), gl = c.getContext('webgl')
const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}'
const fs = `precision mediump float;uniform vec2 r,m;uniform float t;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f*=f*(3.-2.*f);
return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}
void main(){vec2 uv=gl_FragCoord.xy/r.y,d=uv-m;
uv+=d*.25*exp(-dot(d,d)*12.);
vec2 q=vec2(fbm(uv*1.6+t*.04),fbm(uv*1.6+vec2(5.2,1.3)-t*.03));
float f=fbm(uv*1.6+q*2.2);
float k=smoothstep(.5,.7,f)*smoothstep(.3,1.2,gl_FragCoord.x/r.x+.2);
vec3 col=mix(vec3(.957,.945,.918),vec3(.17,.235,1.),k*.9);
col+=(h(gl_FragCoord.xy+fract(t))-.5)*.035;
gl_FragColor=vec4(col,1);}`
if (gl) {
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s }
  const pr = gl.createProgram()
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs))
  gl.linkProgram(pr); gl.useProgram(pr)
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
  const u = k => gl.getUniformLocation(pr, k), R = u('r'), M = u('m'), T = u('t')
  let mx = .8, my = .5, tx = mx, ty = my
  addEventListener('pointermove', e => { tx = e.clientX / innerHeight; ty = 1 - e.clientY / innerHeight })
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches
  const frame = ms => {
    const dpr = Math.min(devicePixelRatio, 1.5), w = innerWidth * dpr, h = innerHeight * dpr
    if (c.width !== w || c.height !== h) { c.width = w; c.height = h; gl.viewport(0, 0, w, h) }
    mx += (tx - mx) * .05; my += (ty - my) * .05
    gl.uniform2f(R, w, h); gl.uniform2f(M, mx, my); gl.uniform1f(T, still ? 0 : ms / 1000)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
    if (!still) requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)
}
