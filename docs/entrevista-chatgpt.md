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

---

## Prompt 2 (cole no ChatGPT, depois da Mensagem 1)

```
=== PROMPT 2 DO CLAUDE ===
Boa Mensagem 1: honesta e sem inflar. Antes de responder suas perguntas, três correções de fonte, porque se isso passar errado para o site, o Luiz é que paga numa entrevista:

CORREÇÕES
1. "20–30 → 2–5 min" e "mais de 60 pedidos" NÃO foram verificados por mim. Vieram do Luiz. Eu verifiquei: os 8 módulos (pastas do código), a stack (package.json), os 619 testes (rodei as duas suítes), as 148 linhas de JS e zero bibliotecas do portfólio, e que o ERP nasceu de um template do Google AI Studio. Daqui em diante: fonte dos números do ERP = "Luiz disse".
2. A história "processos fragmentados antes do ERP" não está confirmada por ninguém. Não use sem o Luiz confirmar como era antes.
3. O método de índice/pendências/regras para IA é do portfólio, não do ERP. O ERP usou outro fluxo: um agente com planos e logs em arquivos (task_plan.md, findings.md, progress.md), onde a IA analisa e "prepara explicação para o usuário", que é o Luiz.

RESPOSTAS ÀS SUAS PERGUNTAS

1) Evidência real × inferência
Abri o conteúdo de três arquivos agora; o resto é inferência pelo nome.
- debug_balance.cjs (VERIFICADO): script para "achar os R$ 664,00 fantasmas". Cruza saldo das contas bancárias, obrigações em aberto (a pagar/a receber) e pagamentos não estornados para fechar o saldo projetado. Houve uma divergência real de R$ 664 no financeiro, e alguém escreveu uma ferramenta de diagnóstico para caçá-la. Essa é a melhor história técnica do ERP, se o Luiz lembrar dela.
- O mesmo script revela o modelo financeiro (VERIFICADO): obrigações a pagar/receber separadas dos pagamentos, pagamento estornado com data de estorno (reversed_at) em vez de apagado, conta bancária com exclusão lógica, uma view (obligation_summary) com status derivado. É modelagem contábil correta: trilha de auditoria em vez de apagar dinheiro.
- fix_policies.cjs (VERIFICADO): torna as migrations reexecutáveis (insere DROP POLICY IF EXISTS antes de cada CREATE POLICY). Problema real: rodar migrations duas vezes quebrava nas políticas de acesso (RLS). Prova que o sistema usa RLS.
- progress.md (VERIFICADO): sessão de "refatoração financeira" conduzida por um agente de IA, que mapeou impactos e preparou a explicação para o Luiz.
- migrate_camel_to_snake, fix_grants, fix_rpc, fix_audit_indexes, fix_financial_v2 (INFERIDO pelo nome, não abri).

2) Decisões arquiteturais tomadas pelo Luiz antes da IA
Não tenho como saber pelo código: o git não guarda quem pensou, só quem salvou. Existem decisões boas no sistema (estorno em vez de apagar, exclusão lógica, camadas pages → services → repositories, validação com Zod, IA rodando no servidor), mas a autoria da ideia só o Luiz pode dizer. Pergunte especificamente: "estornar em vez de apagar pagamento: foi ideia sua, de um contador, da operação ou da IA?". Se foi da operação ("o financeiro precisava ver o histórico"), isso é ótimo: é ele traduzindo necessidade de negócio em modelo de dados.

3) Crítica técnica, sem verniz
Forte para ~1 ano:
- Lojas: 619 testes passando, testes end-to-end (Playwright), senha do admin guardada só como hash, scripts que geram marca/ícones/imagens. Base reaproveitada em dois negócios.
- ERP: modelagem financeira com estorno e auditoria; sistema em uso real.
- Portfólio: comportamento complexo em pouco código.
Revela dependência de IA ou falta de maturidade:
- Raiz do ERP com ~60 arquivos de rascunho: 19 logs de push do Supabase, ts_errors_1..final2, fix_ts_props, fix_ts_props_2, fix_ts_props_3, três arquivos de schema diferentes. Padrão de tentativa e erro com IA sem limpar depois.
- .env, .env.local e .env.vercel commitados no repo (credenciais versionadas). Falha de segurança básica que um tech lead nota em 10 segundos. Precisa ser corrigida antes de o repo ser mostrado.
- READMEs de template (AI Studio, Vite, Lovable) nunca reescritos.
- Os 619 testes provavelmente foram escritos com IA. Viram o maior trunfo se o Luiz explicar o que cobrem, e o maior risco se não souber.

MINHA PROPOSTA DE POSICIONAMENTO (critique)
Título: "Dev full-stack em início de carreira que entrega software usado por negócios reais, com IA como multiplicador, e estudante de Física."
Frase para RH: "Construí o sistema que roda os orçamentos de uma confecção: de 30 para 5 minutos."
Segunda frase para tech lead: "Modelagem financeira com estorno auditável, 619 testes nas lojas, e um portfólio 3D em 148 linhas sem biblioteca."
Diferencial: ponte entre a operação e o código (fala a língua da produção e do financeiro), mais física computacional, que quase nenhum júnior tem.
Assumido abertamente: "uso IA para escrever código; meu trabalho é decompor o problema, revisar, testar e responder pelo resultado."

O QUE PRECISO DE VOCÊ (entreviste o Luiz de novo, pode perguntar à vontade)
- A história dos R$ 664: ele lembra? Qual era a causa? Quem achou?
- O estorno em vez de apagar: de onde veio a ideia?
- Física computacional: o que ele simulou, com qual objetivo (IC? artigo? orientador?), o que fazia na prática (terminal, cluster, scripts, gráficos) e uma vez em que a simulação deu errado.
- Os 619 testes: ele sabe dizer o que testam? Pelo menos 3 exemplos.
- Um caso de habilidade social concreto: um pedido de cliente/usuário que ele precisou traduzir, renegociar ou dizer "não".

Depois responda neste formato:

=== MENSAGEM 2 PARA O CLAUDE ===
A) O que o Luiz respondeu (fatos novos, com fonte)
B) Sua crítica ao meu posicionamento: o que é fraco, genérico ou arriscado
C) 3 versões alternativas de título + frase RH + frase tech lead, da mais segura à mais ousada
D) A história mais forte para abrir o portfólio, no formato situação → ação → resultado
E) O que precisa sair ou ser consertado antes de mostrar (repo, site, discurso)
F) Suas perguntas para mim
=== FIM ===
```
