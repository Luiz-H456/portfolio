# Índice (caminho | função | depende de)
CLAUDE.md | regras para IA | -
TODO.md | pendências, dívidas, decisões, estudo | -
index.html | .stage > .scene > .book (.right = página direita; .leaf = folhas que viram, a última traz a página esquerda no verso; capa = última .leaf) + .cap (legenda fora do 3D) | style.css, main.js
style.css | paleta Bebop (:root), grão, mangá aberto 2400×1600px, grade dos quadros, legenda responsiva | -
main.js | i18n + câmera (measure/target/frame, mola com passos de tempo real) + virada das folhas + baralhos de prints (buildDecks/renderDecks, controles na legenda e setas do teclado) | content/*.json
content/pt.json, content/en.json | textos: ui.*, todo.*, sec.<data-s> (k/t/b + shots [{src,t,tall}]) | -
content/projetos.md | fatos levantados de cada case (fonte, não é publicado) | -
.claude/skills/ | skills do projeto: frontend-design (Anthropic), motion-design (LottieFiles), 60fps-animation, accessible-animation, shader-glsl (iart.ai), superimage-generator (Bluebag), site-assets-art-direction (do Luiz: checklist de geração/aceite de assets) — licenças em cada pasta | -
docs/assets.md | prompts de imagens/vídeos a gerar, tamanhos e nomes de arquivo | -
assets/ | artes P&B em duotone (.art + --img; assets/sm = prévias p/ visão geral, grandes com .on): cover, sobre, erp (fábrica, usada no quadro Botezini), lojas, barbearia, stack, contato; floor.webp = chão colorido (.book::before) | -
assets/shots/ | prints reais (<projeto>-1/2 desktop 1200×750, -3 celular 360×780); listados em content sec.<s>.shots | -
docs/linkedin.md | rascunhos de posts do LinkedIn (projetos, formação, portfólio) | -
