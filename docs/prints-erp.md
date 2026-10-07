# Prints do ERP com dados fictícios

Nunca tire print do ERP em produção: há nomes e valores de clientes reais, e eu não rodo o ERP daqui com as chaves de produção.

## Como gerar
1. Crie um projeto Supabase separado (plano gratuito) só para demonstração, ou use um banco local, e aplique as migrations do ERP.
2. Cadastre dados inventados: 3 clientes com nomes fictícios, 5 a 8 pedidos, estoque de 6 tecidos, 2 orçamentos em estados diferentes.
3. Rode o ERP apontando para esse projeto (arquivo `.env` local, nunca commitado).

## Telas (4 a 6 prints, 1440×900, tema padrão)
1. Lista de orçamentos (mostra os estados)
2. Orçamento aberto (itens, custo por peça, total)
3. Pedido em produção (etapas)
4. Estoque (saldo e custo médio)
5. Financeiro (entradas e saídas)
6. Celular: orçamento ou pedido (o ERP é PWA)

## Antes de me enviar
Nada de e-mail, telefone, CNPJ, nome real ou logotipo de cliente. Envie em PNG; eu converto para WebP, ponho no capítulo do ERP no lugar da arte e apago o aviso "print pendente".
