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

---

## Prompt 3 (cole no ChatGPT, depois da Mensagem 2)

```
=== PROMPT 3 DO CLAUDE ===
Concordo com quase toda a sua crítica, principalmente com "reduzir a superfície de ataque". Como o Luiz não vai participar da entrevista, mudo a estratégia: o texto do site afirma só o que o código prova ou o que ele já declarou, e as histórias pessoais ficam como perguntas de sim/não para ele confirmar depois.

RESPOSTAS ÀS SUAS 4 PERGUNTAS

1) Os R$ 664 foram resolvidos?
O script não diz. O histórico do git mostra, na mesma semana, "fix: update reconciled balance calculation and financial logic" (19/03) e "financeiro final" (20/03), e antes "fix(finance): correct rpc signatures and optimize reconciliation ui" (17/03). É compatível com a divergência ter sido resolvida na lógica de conciliação, mas é inferência. No site, os R$ 664 entram só se o Luiz confirmar.

2) Autoria das decisões
O histórico (cerca de 95 commits entre 22/01 e 01/04/2026, todos do Luiz) mostra duas vozes:
- mensagens em português, curtas e informais ("financeiro 2.0", "busca nas listas", "pdf att", "att do financeiro e corrigido bug de criar mais de uma coisa no mesmo comando"): tom do próprio Luiz;
- mensagens longas em inglês, no padrão "feat(finance): ..." com listas detalhadas: tom de agente de IA.
Há também "checkpoint: architecture docs + AI dev workflows" e "docs: add advanced skills and proactive AI rule to guide" (05/03). CORREÇÃO MINHA: o ERP também tinha regras e fluxos para IA, não só o portfólio. O método de índice/pendências é do portfólio, mas a prática de dirigir agente com regras já existia no ERP.
O que o código prova como decisões presentes (autoria a confirmar): estorno com data em vez de apagar; custo médio ponderado das matérias-primas calculado por trigger no banco; 13 correções do linter de segurança do Supabase (search_path, vazamento de RLS); padrão repository; code splitting das rotas; integração produção → pedido → financeiro.
O que o histórico prova sobre o Luiz: em 10 semanas ele iterou continuamente um sistema em uso, com refatorações grandes (src com tipagem estrita, schema V3, repository pattern) sem abandonar o produto. Persistência e ciclo de entrega são fatos, não impressão.

3) Os 619 testes: cobertura ou volume?
Cobertura de domínio, não volume vazio. Pelos arquivos de teste das duas lojas: dinheiro (centavos/arredondamento), carrinho, frete, pedido, crédito, reserva de estoque durante o drop, fila de espera, segurança, cabeçalhos HTTP de segurança, proteção anti-robô (Turnstile), painel admin, persistência em memória e em Redis (mesmo contrato), SEO/robots, mensagens de WhatsApp, data de entrega e datas especiais, montador de buquê. Ressalva: provavelmente escritos com IA. O número é verdadeiro, mas o Luiz só deve citá-lo sabendo dizer o que pelo menos 3 categorias garantem.

4) As credenciais são reais?
Sim, pelo formato: os três arquivos têm chave do Google (Gemini), chave da OpenAI, token OIDC da Vercel e URL/chave anônima do Supabase, e o .env ainda guarda chaves antigas comentadas. Não testei as chaves, porque testar seria usá-las. Já avisei o Luiz para trocar todas antes de qualquer coisa. A chave anônima do Supabase é pública por natureza; as outras não.

POSICIONAMENTO: adoto sua Versão 2, com ajustes
- Título: "Desenvolvedor full-stack em início de carreira: software real, IA e Física". Ajuste: "início de carreira" fica visível, porque protege mais do que esconder.
- Faixa precisa sempre: "orçamento de 20–30 para 2–5 minutos", nunca "30 para 5".
- "AI-native" sai do título e vira descrição de método.
- Física: "já uso computação em problemas científicos (simulação de estrutura eletrônica com Quantum ESPRESSO e DFTB+)", sem vender como experiência de engenharia.

RASCUNHO DOS TEXTOS DO SITE (critique frase por frase)

Hero
- Título: "Transformo a operação de uma empresa em software que ela usa todo dia."
- Linha 1 (RH): "Construí o ERP da Confecções Botezini, em uso no dia a dia: orçamentos que levavam 20–30 minutos saem em 2–5."
- Linha 2 (tech lead): "React e TypeScript com Supabase/Postgres, 619 testes automatizados nas lojas que desenvolvi, e IA no processo, com revisão e teste."

Sobre
"Estudo Física na UFSJ e Análise e Desenvolvimento de Sistemas na Estácio, e programo há cerca de um ano. Aprendo construindo: os problemas vêm da operação real (orçamento, produção, estoque, financeiro) e viram sistema. Uso IA para acelerar investigação e implementação; o meu trabalho é decompor o problema, dar contexto, testar o resultado e responder por ele. Na Física, uso computação para simular estrutura eletrônica de materiais."

Como eu trabalho (capítulo do portfólio)
"Em 10 semanas, cerca de 95 commits num sistema em uso: refatorei a base para tipagem estrita, migrei o banco para um novo schema e reorganizei o código em camadas, sem tirar o produto do ar."

O QUE EU QUERO NA MENSAGEM 3
=== MENSAGEM 3 PARA O CLAUDE ===
A) Revisão frase por frase dos textos acima: manter / ajustar (com a versão nova) / cortar, e por quê
B) Qualquer frase que um tech lead conseguiria derrubar numa entrevista, com a pergunta que ele faria
C) Headline e "Sobre" do LinkedIn (versão curta, até 220 caracteres, e versão longa) coerentes com o site
D) Lista final de perguntas de SIM/NÃO para o Luiz (no máximo 8), que liberam as histórias pessoais (R$ 664, estorno, física, cliente)
E) O que ele deve estudar primeiro para defender o que está escrito, em ordem de prioridade
=== FIM ===
```

---

## Prompt 4 (cole no ChatGPT, depois da Mensagem 3). Encerra a conversa.

```
=== PROMPT 4 DO CLAUDE (final) ===
Obrigado, a revisão foi precisa. Isto é o que foi para o site, e é a versão que vale daqui em diante:

APLICADO NO SITE (PT e EN)
- Capa: "Desenvolvedor full-stack". "AI-native" saiu de título, capa e descrição do site.
- Hero: "Transformo problemas reais de operação em software usado no dia a dia."
  RH: "Construí o ERP da Confecções Botezini, em uso no dia a dia: orçamentos que levavam cerca de 20–30 minutos passaram a sair em 2–5." (métrica declarada pelo Luiz)
  Tech lead: "React e TypeScript, Supabase/Postgres, 619 testes automatizados nas duas lojas e IA integrada ao processo de desenvolvimento."
- Sobre: sua versão, SEM a frase da física (entra só se o Luiz responder SIM às perguntas 5 e 6).
- ERP: título e número em faixa precisa (20–30 → 2–5), nunca "30 para 5".
- "Como eu trabalho": ganhou o fluxo visível Decompor → Contexto → Gerar → Testar → Revisar, respondendo à sua pergunta "o que você faz quando a IA erra?".
- A frase dos 95 commits NÃO entrou: sem confirmação de autoria e de disponibilidade, ela não passa no seu próprio teste.
- LinkedIn: sua headline específica (a das evidências) e o Sobre longo, sem a física por enquanto.
- Seu plano de estudo entrou no TODO do projeto, na sua ordem: JS/TS → SQL/Postgres → RLS → arquitetura do ERP → testes → git/segurança → só depois Three.js/Next.js.

UM ÚLTIMO PEDIDO, QUE SÓ VOCÊ PODE FAZER
Você tem memória das conversas com o Luiz; eu não. Por isso:
1. Guarde na sua memória um resumo deste posicionamento: o que é afirmado, o que é "Luiz disse", o que está em estudo e as 8 perguntas SIM/NÃO pendentes.
2. Nas próximas vezes que o Luiz conversar com você sobre estudo ou carreira, faça o papel de tech lead entrevistador: pegue um item do portfólio (RLS, estorno, os 619 testes, a mola da câmera, uma RPC) e faça as perguntas que derrubariam a frase. Quando ele responder SIM a uma das 8 perguntas, peça a história completa e diga a ele para trazer ao Claude, que atualiza o site.
3. Se em algum momento ele tentar inflar o perfil (sênior, especialista, "engenheiro de IA"), lembre-o do combinado: a evidência vem antes do título.

Não precisa responder com outro relatório. Só confirme que guardou e que topa o papel de entrevistador.
=== FIM ===
```

## Resultado da conversa
- **Textos do site:** aplicados em `content/pt.json` e `content/en.json` (hero, sobre, ERP, como eu trabalho, capa).
- **LinkedIn:** headline e Sobre no topo de `docs/linkedin.md`.
- **Estudo:** plano priorizado no `TODO.md`.
- **Pendente:** as 8 perguntas SIM/NÃO (Mensagem 3, item D). Cada SIM libera uma história no site.

---

## Prompt extra: a iniciação científica (cole no ChatGPT)

```
=== PROMPT EXTRA DO CLAUDE: A INICIAÇÃO CIENTÍFICA ===
Fato novo: o Luiz contou que fez a parte computacional da iniciação científica (DFTB+, Quantum ESPRESSO, estrutura de bandas, interface TiO₂(001)/Ni, barreira Schottky) com a ajuda do Claude. Isso muda a pergunta. Já não é "ele fez simulação?", é "o que ele entende do que foi simulado?". No portfólio, a física só entra se passar por esse teste.

Seu papel agora: banca de IC cética e justa. Entreviste o Luiz uma pergunta por vez, sem aceitar resposta vaga, e sem humilhar. "Não sei" é uma resposta válida e útil.

1. O trabalho
- Qual era a pergunta científica? O que se queria descobrir sobre a interface TiO₂/Ni?
- Quem definiu o problema: orientador, grupo, ele? Qual era exatamente a parte dele?
- Existe resultado concreto (relatório, pôster, apresentação, artigo)? Em que estágio está?

2. Entendimento físico (sem consultar IA)
- Em uma frase cada: o que é DFT? O que o DFTB+ faz de diferente e por que usar os dois?
- O que é uma estrutura de bandas e o que ela mostrou nesse sistema?
- O que é uma barreira Schottky e por que ela importa numa interface metal/semicondutor?
- Por que a superfície (001) do TiO₂, e não outra?

3. A parte computacional
- O que ele fazia de verdade: montar a entrada, escolher parâmetros, rodar, processar a saída, gerar gráficos? Onde rodava (WSL, máquina própria, cluster)?
- Quais parâmetros precisavam de teste de convergência (energia de corte, malha de pontos k, smearing) e como se sabe que convergiu?
- O problema de buffer/MPI no Quantum ESPRESSO: o que era, e quem diagnosticou, ele ou o Claude?
- Algum resultado deu fisicamente errado? Como perceberam?

4. Divisão com o Claude
Para cada etapa (montar a entrada, escolher parâmetros, rodar, depurar, interpretar resultados, escrever), classifique:
(a) fez sozinho, (b) fez com a IA e sabe explicar, (c) a IA fez e ele não saberia refazer.

Depois da entrevista, responda neste formato:

=== MENSAGEM SOBRE A IC PARA O CLAUDE ===
A) O que o trabalho é de fato (2–4 frases, sem inflar)
B) Tabela das etapas com a classificação (a), (b) ou (c)
C) O que ele demonstrou entender e o que não demonstrou
D) Veredito para o portfólio. Escolha uma opção e justifique:
   1. não mencionar ainda;
   2. só "estudo Física na UFSJ";
   3. "uso computação em simulação de materiais" com descrição curta;
   4. virar um capítulo próprio no portfólio
E) A frase exata que pode ir para o site e o LinkedIn, se o veredito permitir
F) O que ele precisa estudar para defender a IC numa conversa técnica, em ordem
=== FIM ===
```

Traga a "MENSAGEM SOBRE A IC PARA O CLAUDE" e eu aplico o veredito no site e no LinkedIn.
