# Aula 06 - Gestão de Projetos Front-End

## Projeto de referência: Organiza Aulas

Aplicação proposta para ajudar estudantes a organizar disciplinas, tarefas e prazos. O material desta aula registra como o trabalho será gerenciado antes da implementação.

## Backlog priorizado

| ID | Item | Prioridade | Estimativa | Sprint | Situação |
| --- | --- | --- | --- | --- | --- |
| US01 | Cadastrar uma tarefa | Alta | 3 pontos | 1 | A fazer |
| US02 | Listar tarefas | Alta | 2 pontos | 1 | A fazer |
| US03 | Marcar tarefa como concluída | Alta | 2 pontos | 1 | A fazer |
| US04 | Filtrar por status | Média | 3 pontos | 2 | A fazer |
| US05 | Exibir resumo de progresso | Média | 2 pontos | 2 | A fazer |
| US06 | Persistir dados no navegador | Média | 5 pontos | 2 | A fazer |

## Sprint 1

**Objetivo:** entregar o fluxo mínimo para criar, visualizar e concluir tarefas.

| Tarefa | Responsável | Estimativa | Status |
| --- | --- | --- | --- |
| Criar estrutura inicial da interface | Equipe Front-end | 1h | A fazer |
| Criar formulário de tarefa | Equipe Front-end | 1h | A fazer |
| Implementar lista de tarefas | Equipe Front-end | 1h | A fazer |
| Implementar conclusão de tarefa | Equipe Front-end | 45min | A fazer |
| Testar os fluxos principais | Equipe | 45min | A fazer |

## Kanban

`Backlog` → `A fazer` → `Em andamento` → `Em revisão` → `Concluído`

Cada tarefa deve ser movida somente quando cumprir os critérios da coluna anterior. O quadro pode ser reproduzido no GitHub Projects, Trello ou ferramenta equivalente.

## Estratégia de branches

- `main`: versão estável e revisada;
- `feature/nome-da-funcionalidade`: desenvolvimento de uma história;
- `fix/descricao-do-problema`: correções encontradas durante testes.

Ao finalizar uma funcionalidade, ela deve passar por revisão antes de entrar na `main`.

## Definition of Done

Uma tarefa só é considerada concluída quando:

- o requisito foi implementado e funciona no fluxo esperado;
- o código foi revisado e não apresenta erros no console;
- a interface foi verificada em tela pequena e tela grande;
- cenários de sucesso e erro foram testados;
- a alteração foi documentada e possui um commit descritivo.

## Critérios de aceitação da US01

- o usuário consegue informar título e prazo;
- o título é obrigatório;
- ao salvar, a tarefa aparece na lista;
- a aplicação apresenta uma mensagem clara quando houver dados inválidos.
