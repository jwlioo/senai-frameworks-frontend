# Relatório de entregas e deploys

**Última verificação:** 29/10/2026

Este relatório separa o que já está público do que exige uma ação antes da avaliação. Os links foram testados por resposta HTTP.

## Projetos já acessíveis

| Projeto | URL | Resultado |
| --- | --- | --- |
| Projeto Vue.js | <https://projetovue-rho.vercel.app/> | HTTP 200 |
| API de status, data e hora | <https://express-backend-lueb.onrender.com/> | HTTP 200 |
| Front-end React da API de status | <https://frontend-api-cyan.vercel.app/> | HTTP 200 |
| Front-end CRUD - Aula 05 | <https://express-aula05-backend.vercel.app/> | HTTP 200 |

## Pendências encontradas

| Prioridade | Item | Situação encontrada | Ação necessária |
| --- | --- | --- | --- |
| Alta | Back-end CRUD da Aula 05 | `https://express-aula05.onrender.com/` e `/api/notes` retornam HTTP 404 | Criar ou corrigir o serviço no Render; usar `npm install` para build e o comando de início definido no `package.json`. Depois, atualizar a URL no README. |
| Alta | Projeto React da Aula 08 | Código e build local estão prontos; ainda não há URL pública | Importar o repositório no Vercel, selecionar `Aula 08 - Projeto React/catalogo-react` como **Root Directory** e publicar. |
| Média | Atividade CSS/Flexbox - Aula 07 | Página está pronta, mas sem URL pública | Publicar no Vercel como projeto estático, usando `Aula 07 - Frameworks CSS/Atividade 01 - CSS e Flexbox` como diretório raiz. |
| Média | Atividade Tailwind - Aula 07 | Página está pronta, mas sem URL pública | Publicar no Vercel como projeto estático, usando `Aula 07 - Frameworks CSS/Atividade 02 - Tailwind CSS` como diretório raiz. |
| Média | Evidências visuais das Aulas 07 e 08 | Os READMEs explicam as atividades, mas não possuem capturas de tela | Adicionar screenshots da interface e do código, caso isso seja cobrado na entrega da aula. |
| Baixa | Página inicial do GitHub | O repositório não tem descrição, site ou tópicos configurados | Em **About** no GitHub, adicionar uma descrição curta, a URL principal quando houver e tópicos como `react`, `vite`, `tailwindcss` e `senai`. |

## O que o README passou a demonstrar

- links diretos de código e aplicações;
- situação de cada entrega das Aulas 01 a 08;
- instruções para executar a prática React localmente;
- indicação transparente das pendências de deploy;
- acesso a este relatório para avaliação.

## Roteiro de publicação recomendado

1. Corrigir e publicar primeiro a API CRUD da Aula 05 no Render, pois o front-end depende dela.
2. Atualizar o front-end CRUD com a nova URL da API se ela mudar.
3. Publicar o projeto React da Aula 08 no Vercel.
4. Publicar as duas páginas estáticas da Aula 07 no Vercel.
5. Copiar as URLs definitivas para a tabela principal do `README.md`.

> Não foram inventadas URLs para projetos ainda não publicados. A publicação em Vercel ou Render exige acesso autenticado à conta que receberá os serviços.
