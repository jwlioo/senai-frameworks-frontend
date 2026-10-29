import { useMemo, useState } from 'react'
import { conceitos } from './data/conceitos.js'
import Cabecalho from './components/Cabecalho.jsx'
import ListaConceitos from './components/ListaConceitos.jsx'
import Rodape from './components/Rodape.jsx'

export default function App() {
  const [busca, setBusca] = useState('')
  const [somenteFavoritos, setSomenteFavoritos] = useState(false)
  const [favoritos, setFavoritos] = useState([])

  const conceitosVisiveis = useMemo(() => conceitos.filter((conceito) => {
    const correspondeBusca = `${conceito.titulo} ${conceito.categoria}`.toLowerCase().includes(busca.toLowerCase())
    return correspondeBusca && (!somenteFavoritos || favoritos.includes(conceito.id))
  }), [busca, favoritos, somenteFavoritos])

  function alternarFavorito(id) {
    setFavoritos((atuais) => atuais.includes(id) ? atuais.filter((favorito) => favorito !== id) : [...atuais, id])
  }

  return (
    <div className="pagina">
      <Cabecalho total={conceitos.length} favoritos={somenteFavoritos} aoAlternarFavoritos={() => setSomenteFavoritos((valor) => !valor)} />
      <main>
        <label className="busca" htmlFor="busca">Buscar conceito
          <input id="busca" value={busca} onChange={(evento) => setBusca(evento.target.value)} placeholder="Ex.: JSX, props ou listas" />
        </label>
        <p className="resultado">{conceitosVisiveis.length} {conceitosVisiveis.length === 1 ? 'resultado' : 'resultados'} exibidos</p>
        <ListaConceitos conceitos={conceitosVisiveis} favoritos={favoritos} aoAlternarFavorito={alternarFavorito} />
      </main>
      <Rodape />
    </div>
  )
}
