// node tools/prerender.mjs: grava o conteúdo de content/pt.json em index.html (entre <!--seo-->) e em llms.txt, para quem não roda JS
import { readFileSync, writeFileSync } from 'node:fs'
const { sec } = JSON.parse(readFileSync('content/pt.json', 'utf8'))
const ids = ['sobre', 'metodo', 'erp', 'ic', 'botezini', 'lojas', 'barbearia', 'stack', 'contato']
const html = `<div class="sr"><h1>Luiz Henrique Carvalho</h1><p data-i="sec.hero.k">${sec.hero.k}</p><div data-i="sec.hero.b">${sec.hero.b}</div>` +
  ids.map(id => `<section><h2 data-i="sec.${id}.k">${sec[id].k}</h2><div data-i="sec.${id}.b">${sec[id].b}</div></section>`).join('') + '</div>'
const page = readFileSync('index.html', 'utf8').replace(/<!--seo-->[\s\S]*<!--\/seo-->/, `<!--seo-->${html}<!--/seo-->`)
writeFileSync('index.html', page)
const txt = s => s.replace(/<a [^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g, '[$2]($1)').replace(/<\/(p|li)>/g, '\n').replace(/<[^>]+>/g, '').replace(/\n{2,}/g, '\n').trim()
writeFileSync('llms.txt', `# Luiz Henrique Carvalho\n\n> ${txt(sec.hero.k)}. ${txt(sec.hero.b).split('\n')[0]}\n\n` +
  ids.map(id => `## ${sec[id].k}\n\n${txt(sec[id].b)}\n`).join('\n'))
