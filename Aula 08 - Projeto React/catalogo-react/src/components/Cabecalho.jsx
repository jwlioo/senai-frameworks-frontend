export default function Cabecalho({ total, favoritos, aoAlternarFavoritos }) {
  return (
    <header className="cabecalho">
      <div>
        <p className="rotulo">Aula 08 · Projeto React</p>
        <h1>Catálogo React</h1>
        <p>Explore {total} conceitos fundamentais para construir interfaces.</p>
      </div>
      <button className="botao secundario" type="button" onClick={aoAlternarFavoritos}>
        {favoritos ? 'Mostrar todos' : 'Ver favoritos'}
      </button>
    </header>
  )
}
