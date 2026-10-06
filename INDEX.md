# Índice (caminho | função | depende de)
CLAUDE.md | regras para IA | -
TODO.md | pendências, dívidas, decisões, estudo | -
index.html | .stage > .scene > .book: #cR (última pág. direita do capítulo, embaixo), #cx (folhas extras do capítulo), .leaf.main (frente = pág. direita principal, verso #cL = esquerda do capítulo), .leaf = folhas da abertura (a última traz a pág. esquerda no verso; capa = última) + .cap (legenda, botão #chap-b) | style.css, main.js
style.css | paleta Bebop (:root), grão, mangá aberto 2400×1600px, grade dos quadros, legenda responsiva | -
main.js | i18n; câmera (measure/target/frame, mola em passos de tempo real); keys+meta por parada; capítulo com várias duplas (páginas L/R, L2/R2...; folhas extras em #cx, viradas por xl conforme meta.sp; body()/inside() montam print, por dentro, código ou html; fillChap/openChap/closeChap: paradas: 2 páginas inteiras, título, um print por parada; vira .leaf.main em 0,9 s; fecha ao rolar além do fim); .here/.has-chap + selo .go nos quadros de projeto; fim: 3 paradas (afasta, fecha, capa) e volta ao topo; teclado (go/kt) e índice #toc (buildToc); CAP = cor da legenda | content/*.json
content/pt.json, content/en.json | textos: ui.*, todo.*, sec.<data-s> (k/t/b; chap.items [{p L/R, a grid-area, t rótulo} + src/n print | in {num,numl,prob,dec,flow} 'por dentro' | code/n | html/n]; chap.art) | -
content/projetos.md | fatos levantados de cada case (fonte, não é publicado) | -
.claude/skills/ | skills do projeto: frontend-design (Anthropic), motion-design (LottieFiles), 60fps-animation, accessible-animation, shader-glsl (iart.ai), superimage-generator (Bluebag), site-assets-art-direction (do Luiz: checklist de geração/aceite de assets) — licenças em cada pasta | -
docs/assets.md | prompts de imagens/vídeos a gerar, tamanhos e nomes de arquivo | -
assets/ | artes P&B em duotone (.art + --img; assets/sm = prévias p/ visão geral, grandes com .on): cover, sobre, erp (escritório na nave), botezini (fábrica), lojas, barbearia, stack, contato; assets/deco/p0-4 = páginas de passagem desfocadas (300×400); floor.webp = chão colorido (.book::before) | -
assets/shots/ | prints reais (<projeto>-1/2 desktop 1200×750, -3 celular 360×780); listados em content sec.<s>.shots | -
docs/linkedin.md | rascunhos de posts do LinkedIn (projetos, formação, portfólio) | -
favicon-32.png, apple-touch-icon.png | ícones (nave preta sobre ferrugem) | -
docs/novo-projeto.md | passo a passo p/ adicionar projeto e plano de capítulos (virar página) | -
docs/entrevista-chatgpt.md | roteiro Claude×ChatGPT p/ posicionamento: fluxo de 7 mensagens e Prompt 1 | -
assets/fonts/ | Anton e Barlow Semi Condensed (woff2 latin, OFL) hospedadas no site, com preload | -
assets/ic.svg | estrutura de bandas complexa (gerada das fórmulas do notebook da IC), usada no quadro e no capítulo Física | -
