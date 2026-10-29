import CardConceito from './CardConceito.jsx'

export default function ListaConceitos({ conceitos, favoritos, aoAlternarFavorito }) {
  if (conceitos.length === 0) {
    return <p className="vazio">Nenhum conceito encontrado para este filtro.</p>
  }

  return (
    <section className="grade" aria-label="Lista de conceitos">
      {conceitos.map((conceito) => (
        <CardConceito
          key={conceito.id}
          conceito={conceito}
          favorito={favoritos.includes(conceito.id)}
          aoAlternarFavorito={aoAlternarFavorito}
        />
      ))}
    </section>
  )
}
