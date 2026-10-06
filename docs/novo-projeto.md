# Adicionar um projeto

## O que você me entrega
1. **Fatos:** problema do cliente, o que você fez, stack, um resultado (número, se houver) e o link.
2. **Arte:** gerada com o bloco de estilo de `docs/assets.md`, em preto e branco, sem moldura.
3. **Prints:** eu tiro rodando o código do repo. Se o projeto tiver dados sensíveis (como o ERP), você manda prints com dados fictícios.

## O que eu faço (4 lugares, nada mais)
| Onde | O quê |
|---|---|
| `content/pt.json` e `content/en.json` | `sec.<id>`: `k`, `t`, `b` (descrição, tecnologias, link), `shots` (`src`, `t` rótulo, `n` narração, `p` página L/R, `a` grid-area, `tall`) e `chap.art` (área da arte no capítulo) |
| `assets/<id>.webp`, `assets/sm/<id>.webp`, `assets/shots/<id>-N.webp` | arte (2× e prévia) e prints |
| `index.html` | um `.pn` com `data-s="<id>"` e `class="art a-<id> c-<cor>"` numa página |
| `style.css` + `main.js` | `grid-area` do quadro, `.a-<id>` com a arte e a cor da legenda em `CAP` |

A câmera, o capítulo (virar a página e mostrar os prints como quadros), a legenda e o carregamento sob demanda funcionam sozinhos a partir do `data-s` e dos `shots`. Cada capítulo comporta até ~7 prints nas 2 páginas.

## Limite de espaço
- **Hoje:** 9 quadros em 2 páginas. Só o quadro roxo decorativo (ao lado de "Sobre") está livre, então cabe **1 projeto** sem mexer no layout.
- **Do 2º projeto novo em diante:** viramos a página. O mangá ganha um segundo par de páginas (capítulo 2). No fim do primeiro par, o scroll vira uma folha, com a mesma animação da abertura, e a câmera segue pelos quadros novos. Cada par comporta de 5 a 7 quadros.
- **Ordem:** os melhores projetos ficam no capítulo 1. Quem não rola até o fim precisa ver o ERP e o que tiver número.
- **Quando houver muitos (mais de 12):** os mais fracos saem do mangá. Portfólio é curadoria, não arquivo.
