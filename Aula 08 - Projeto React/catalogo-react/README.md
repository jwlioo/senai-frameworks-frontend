# Catálogo React - Aula 08

Aplicação React para consultar conceitos estudados na Aula 08. O usuário pode pesquisar conteúdos e marcar cards como favoritos.

## Funcionalidades

- Busca por título ou categoria;
- Lista de conceitos renderizada a partir de um array;
- Favoritar e remover conceitos dos favoritos;
- Filtro para mostrar somente favoritos;
- Mensagem de estado vazio quando nenhum item corresponde ao filtro;
- Layout responsivo.

## Conceitos utilizados

| Conceito | Onde foi aplicado |
| --- | --- |
| JSX | Estrutura dos componentes `.jsx` |
| Componentes | `Cabecalho`, `CardConceito`, `ListaConceitos` e `Rodape` |
| Props | Dados e callbacks passados entre `App` e seus filhos |
| Listas e keys | `conceitos.map()` com `key={conceito.id}` |
| Renderização condicional | Mensagem da lista vazia e botão de favoritos |
| Estado e atualização | Busca e favoritos com `useState` |

O React atualiza a interface a partir do estado; o desenvolvedor descreve o resultado esperado em JSX, e o React coordena a atualização do DOM.

## Como executar

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```
