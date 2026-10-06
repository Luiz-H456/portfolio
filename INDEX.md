# Índice (caminho | função | depende de)
CLAUDE.md | regras para IA | -
TODO.md | pendências, dívidas, decisões, estudo | -
index.html | página única; textos vêm de content/ via data-i | style.css, main.js
style.css | tokens (:root), tipografia, layout | -
main.js | i18n (data-i → content/<lang>.json) + shader WebGL do fundo | content/*.json
content/pt.json, content/en.json | todos os textos do site, mesmas chaves | -
content/projetos.md | fatos levantados de cada case (fonte, não é publicado) | -
