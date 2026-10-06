# Entrevista Claude × ChatGPT: como vender o Luiz

## Por que assim
O ChatGPT conhece o Luiz: conversas, jeito de pensar, histórias, habilidades sociais. O Claude conhece o código e o portfólio: o que está construído e verificado. Nenhum dos dois sozinho escreve um posicionamento que seja ao mesmo tempo **verdadeiro e forte**. A conversa junta as duas metades.

## Como funciona (7 mensagens)
```
Claude ──Prompt 1──▶ ChatGPT   (contexto + entrevista livre com o Luiz)
Claude ◀─Mensagem 1── ChatGPT   (o que ele sabe do Luiz + o que descobriu)
Claude ──Prompt 2──▶ ChatGPT   (Claude confere fatos e propõe posicionamento)
Claude ◀─Mensagem 2── ChatGPT   (crítica + versões melhores)
Claude ──Prompt 3──▶ ChatGPT   (Claude consolida textos para o site)
Claude ◀─Mensagem 3── ChatGPT   (revisão final de tom e verdade)
Claude ──Prompt 4──▶ ChatGPT   (versão final fechada + o que o Luiz precisa estudar)
```

**Passo a passo para você, Luiz:**
1. Abra uma conversa nova no ChatGPT, de preferência com a memória ligada, e cole o **Prompt 1** abaixo.
2. O ChatGPT vai **te entrevistar** primeiro: responda com sinceridade, inclusive "não sei" e "isso foi a IA que fez".
3. Quando ele terminar, vai escrever a **Mensagem 1 para o Claude**. Copie e cole aqui para mim.
4. Eu escrevo o Prompt 2 a partir dela. Você leva, traz a Mensagem 2, e assim por diante.

Os Prompts 2, 3 e 4 **não estão prontos de propósito**: cada um depende da resposta anterior. Escrever tudo agora seria uma conversa de mentira.

## Regras que valem para os dois
- **Nada inventado.** Número, cliente ou habilidade sem fonte vira pergunta, não frase.
- **Separar "domina" de "está aprendendo".** No site, o que está em estudo aparece como estudo.
- **Linguagem dupla:** o RH entende a primeira frase, e o tech lead acha substância na segunda.
- **Sem bajulação.** Se algo é fraco, o outro diz.

---

## Prompt 1 (cole no ChatGPT)

```
Você vai me ajudar a construir o posicionamento profissional do Luiz Henrique Carvalho, e vai fazer isso conversando com outra IA (o Claude, que trabalhou com ele no código do portfólio). O Luiz vai levar as mensagens entre vocês dois.

PAPÉIS
- Você (ChatGPT): conhece o Luiz pelas conversas de vocês. Sua parte é trazer quem ele é: jeito de pensar, histórias, habilidades sociais, hábitos de trabalho, o que ele faz de diferente, como usa IA no dia a dia.
- Claude: conhece o código e os projetos. Ele verificou o que está abaixo diretamente nos repositórios.
- Luiz: está nesta conversa e vai responder às suas perguntas.

O QUE O CLAUDE JÁ VERIFICOU (fatos, pode usar)
- Luiz Henrique Carvalho, São João del-Rei (MG). Programa há cerca de 1 ano. Cursa Física (bacharelado, UFSJ) e Análise e Desenvolvimento de Sistemas (Estácio).
- ERP da Confecções Botezini (em produção, usado no dia a dia da empresa): orçamentos caíram de 20–30 min para 2–5 min; mais de 60 pedidos feitos pelo sistema; padronizou orçamentos e estoque. 8 módulos (dashboard, orçamentos, pedidos, produção, estoque, financeiro, cadastros, inteligência com IA). Stack: React, TypeScript, Supabase/Postgres, Zod, TanStack Query, Gemini rodando no servidor, PWA, Vercel.
- Site botezini.com.br: SEO técnico (dados estruturados, data de atualização tirada do git, IndexNow) e páginas de venda por tipo de cliente. Segundo o Luiz, traz leads qualificados toda semana de forma passiva.
- BTZN (loja de roupas com lançamentos em "drops" e contagem regressiva) e Fora da Caixa (rosas eternas e montador de buquê): mesma base de e-commerce reaproveitada. Astro, React, Upstash Redis, Vercel. 619 testes automatizados passando nas duas lojas (288 + 331, rodados pelo Claude).
- Barbearia Stilo Black: site de cliente real no ar, com agendamento pelo app.
- O próprio portfólio: um mangá 3D interativo feito com menos de 150 linhas de JavaScript e zero bibliotecas; a câmera usa uma mola amortecida (física do oscilador harmônico); bilíngue PT/EN; feito com IA usando um método próprio de economia de contexto (índice de arquivos, lista de pendências, regras para a IA).

O OBJETIVO
O Luiz quer entrar no mercado como dev full-stack "AI-native": alguém que entrega rápido com IA sem perder o controle técnico. O portfólio hoje mostra os projetos, mas ainda não mostra o PROFISSIONAL: diferenciais, produtividade, entendimento técnico, habilidades sociais, o que ele tem de fora da caixa. O público é duplo: RH (decide em segundos, não lê código) e tech lead (procura substância).

ALERTAS DO CLAUDE (leve a sério)
- Ele tem 1 ano de experiência. "Engenheiro de IA sênior" seria mentira e queimaria a imagem dele. O ponto forte real é: entregou sistemas que negócios reais usam, e tem base de Física.
- Muito do código foi escrito com IA. Isso é diferencial só se ele souber explicar e defender as decisões. Pergunte a ele o que sabe explicar e o que não sabe.
- Números só se forem reais. Se ele não souber, registre como "a confirmar".

SUA TAREFA AGORA
1. Antes de perguntar, diga o que você já sabe do Luiz pela memória das conversas de vocês (qualidades, histórias, jeito de trabalhar, interesses). Marque o que é certeza e o que é impressão.
2. Entreviste o Luiz, com liberdade, uma ou duas perguntas por vez. Cubra pelo menos:
   - os projetos: qual problema real ele viu, uma decisão difícil, algo que deu errado e como resolveu, o que ele faria diferente;
   - como ele usa IA de verdade (fluxo, ferramentas, o que ele delega e o que não delega);
   - produtividade: prazos, quantos projetos tocou ao mesmo tempo, como aprende algo novo;
   - habilidades sociais: lidar com cliente, explicar coisa técnica para leigo, trabalho com a família ou a empresa;
   - o que ele tem de fora da caixa (a Física, interesses, histórias que outros devs não têm);
   - o que ele sabe explicar tecnicamente sem ajuda e o que ainda não sabe.
   Pode fazer quantas perguntas achar necessário. Se alguma resposta for vaga, insista.
3. Quando terminar, escreva uma mensagem para o Claude neste formato exato:

=== MENSAGEM 1 PARA O CLAUDE ===
A) Quem é o Luiz (5–8 frases, só o que foi confirmado)
B) Diferenciais com evidência (diferencial → prova concreta → fonte: memória / Luiz disse / Claude verificou)
C) Habilidades sociais com exemplo real
D) Como ele usa IA (fluxo real, em passos)
E) Histórias fortes para o site e o LinkedIn (situação → ação → resultado)
F) O que ele domina × o que está aprendendo
G) Números novos que surgiram (marcando "confirmado" ou "a confirmar")
H) Dúvidas e discordâncias suas com os alertas ou fatos do Claude
I) 3 perguntas suas para o Claude sobre o código ou os projetos
=== FIM ===
```

---

## Depois das 7 mensagens
O resultado final vira: textos novos do site (`content/pt.json` e `en.json`), o "Sobre" e o hero reescritos, os posts de `docs/linkedin.md` atualizados e itens de estudo no `TODO.md`. Eu faço essa parte.
