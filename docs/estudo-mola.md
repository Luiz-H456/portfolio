# Estudo: a mola da câmera (main.js, frame)

O item "mola amortecida" só sai do TODO quando você conseguir fazer as contas abaixo sem consultar. Até lá o site não afirma que você domina o assunto.

## O código
```js
vel = vel * d + (alvo - x) * r   // d = quanto da velocidade sobrou, r = força da mola
x  += vel
```
Rodado em passos de 16,7 ms (`steps`); se o navegador perde quadros, roda mais passos, e a velocidade fica igual a 30 ou 120 fps.

## A conta
Seja `e = x - alvo`. Então `e' = (1-r)e + d·v` e `v' = d·v - r·e`, uma matriz 2×2 sobre `(e, v)`:
- traço = `1 + d - r`; determinante = `d`;
- autovalores: `λ² - (1+d-r)λ + d = 0`;
- discriminante negativo → autovalores complexos → oscila (subamortecido); `|λ| = √d` é o fator de decaimento por passo; o ângulo é `θ = arccos((1+d-r) / (2√d))`.

| modo | d | r | discriminante | \|λ\| | período | passa do alvo em |
|---|---|---|---|---|---|---|
| viajando | 0,55 | 0,10 | -0,0975 | 0,742 | ~30 passos (0,5 s) | 1,2% |
| parado | 0,72 | 0,05 | -0,0911 | 0,849 | ~35 passos (0,59 s) | 5,6% |

(Conferido simulando as duas recorrências: valores acima saem da simulação, não só da fórmula.)

## Exercícios (sem IA)
1. Derive `e'` e `v'` a partir das duas linhas do código e escreva a matriz.
2. Qual `d` deixa o sistema criticamente amortecido com `r = 0,1`? (discriminante = 0)
3. Por que `d ≥ 1` faz a câmera nunca assentar? (`|λ| = √d`)
4. Compare com a EDO `x'' + 2ζω x' + ω² x = 0`: que `ζ` e `ω` correspondem ao modo "viajando"? (dica: `λ = e^{(-ζω ± iω√(1-ζ²))·Δt}`)

## Pronto quando
Você explica em voz alta, para alguém, por que a câmera passa um pouco do ponto e assenta, e o que mudar para ela não passar.
