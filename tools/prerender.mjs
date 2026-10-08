// node tools/prerender.mjs (a Vercel roda no build): grava o texto de content/*.json em index.html (PT) e en/index.html (EN) e llms.txt,
// para quem não roda JS. Com SITE_URL ou VERCEL_PROJECT_PRODUCTION_URL grava também canonical, hreflang, og:url, og:image, sitemap.xml e robots.txt
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
const J = l => JSON.parse(readFileSync(`content/${l}.json`, 'utf8'))
const ids = ['sobre', 'metodo', 'erp', 'ic', 'botezini', 'lojas', 'barbearia', 'stack', 'contato']
const host = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL)
const url = { pt: '/', en: '/en/' }
const sub = (s, re, to) => s.replace(re, () => to)

function render(src, l) {
  const { sec, ui } = J(l)
  const block = `<div class="sr"><h1>Luiz Henrique Carvalho</h1><p data-i="sec.hero.k">${sec.hero.k}</p><div data-i="sec.hero.b">${sec.hero.b}</div>` +
    ids.map(id => `<section><h2 data-i="sec.${id}.k">${sec[id].k}</h2><div data-i="sec.${id}.b">${sec[id].b}</div></section>`).join('') + '</div>'
  const meta = host ? `<link rel="canonical" href="${host}${url[l]}"><link rel="alternate" hreflang="pt-BR" href="${host}/"><link rel="alternate" hreflang="en" href="${host}/en/"><link rel="alternate" hreflang="x-default" href="${host}/">` +
    `<meta property="og:url" content="${host}${url[l]}"><meta property="og:image" content="${host}/assets/og.png"><meta name="twitter:image" content="${host}/assets/og.png">` : ''
  let s = sub(src, /<!--seo-->[\s\S]*<!--\/seo-->/, `<!--seo-->${block}<!--/seo-->`)
  s = sub(s, /<!--meta-->[\s\S]*<!--\/meta-->/, `<!--meta-->${meta}<!--/meta-->`)
  s = sub(s, /<title>.*?<\/title>/, `<title>${ui.title}</title>`)
  s = sub(s, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${ui.desc}">`)
  s = sub(s, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${ui.title}">`)
  s = sub(s, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${ui.desc}">`)
  if (l === 'en') s = sub(sub(sub(s, /<html lang="pt-BR">/, '<html lang="en">'), /og:locale" content="pt_BR"/, 'og:locale" content="en_US"'), /<meta charset="utf-8">/, '<meta charset="utf-8">\n<base href="/">')
  return s
}

const pt = render(readFileSync('index.html', 'utf8'), 'pt')
writeFileSync('index.html', pt)
mkdirSync('en', { recursive: true })
writeFileSync('en/index.html', render(pt, 'en'))

const { sec } = J('pt')
const txt = s => s.replace(/<a [^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g, '[$2]($1)').replace(/<\/(p|li)>/g, '\n').replace(/<[^>]+>/g, '').replace(/\n{2,}/g, '\n').trim()
writeFileSync('llms.txt', `# Luiz Henrique Carvalho\n\n> ${txt(sec.hero.k)}. ${txt(sec.hero.b).split('\n')[0]}\n\n` +
  ids.map(id => `## ${sec[id].k}\n\n${txt(sec[id].b)}\n`).join('\n'))
if (host) {
  writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${host}/</loc></url><url><loc>${host}/en/</loc></url></urlset>\n`)
  writeFileSync('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${host}/sitemap.xml\n`)
}
