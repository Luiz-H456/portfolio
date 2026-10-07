// node tools/prerender.mjs (a Vercel roda no build): grava content/pt.json em index.html (<!--seo-->) e llms.txt, para quem não roda JS;
// com SITE_URL ou VERCEL_PROJECT_PRODUCTION_URL grava também canonical, og:url, og:image (<!--meta-->), sitemap.xml e a linha Sitemap do robots.txt
import { readFileSync, writeFileSync } from 'node:fs'
const { sec } = JSON.parse(readFileSync('content/pt.json', 'utf8'))
const ids = ['sobre', 'metodo', 'erp', 'ic', 'botezini', 'lojas', 'barbearia', 'stack', 'contato']
const html = `<div class="sr"><h1>Luiz Henrique Carvalho</h1><p data-i="sec.hero.k">${sec.hero.k}</p><div data-i="sec.hero.b">${sec.hero.b}</div>` +
  ids.map(id => `<section><h2 data-i="sec.${id}.k">${sec[id].k}</h2><div data-i="sec.${id}.b">${sec[id].b}</div></section>`).join('') + '</div>'
const page = readFileSync('index.html', 'utf8').replace(/<!--seo-->[\s\S]*<!--\/seo-->/, `<!--seo-->${html}<!--/seo-->`)
const host = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL)
const meta = host ? `<link rel="canonical" href="${host}/"><meta property="og:url" content="${host}/"><meta property="og:image" content="${host}/assets/og.png"><meta name="twitter:image" content="${host}/assets/og.png">` : ''
writeFileSync('index.html', page.replace(/<!--meta-->[\s\S]*<!--\/meta-->/, `<!--meta-->${meta}<!--/meta-->`))
if (host) {
  writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${host}/</loc></url></urlset>\n`)
  writeFileSync('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${host}/sitemap.xml\n`)
}
const txt = s => s.replace(/<a [^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g, '[$2]($1)').replace(/<\/(p|li)>/g, '\n').replace(/<[^>]+>/g, '').replace(/\n{2,}/g, '\n').trim()
writeFileSync('llms.txt', `# Luiz Henrique Carvalho\n\n> ${txt(sec.hero.k)}. ${txt(sec.hero.b).split('\n')[0]}\n\n` +
  ids.map(id => `## ${sec[id].k}\n\n${txt(sec[id].b)}\n`).join('\n'))
