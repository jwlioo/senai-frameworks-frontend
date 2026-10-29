export default function CardConceito({ conceito, favorito, aoAlternarFavorito }) {
  return (
    <article className="card">
      <div className="card-topo"><span>{conceito.categoria}</span><strong>{conceito.nivel}</strong></div>
      <h2>{conceito.titulo}</h2>
      <p>{conceito.descricao}</p>
      <button className="botao" type="button" onClick={() => aoAlternarFavorito(conceito.id)}>
        {favorito ? '★ Favorito' : '☆ Favoritar'}
      </button>
    </article>
  )
}
