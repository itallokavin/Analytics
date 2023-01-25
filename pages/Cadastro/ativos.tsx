import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Ativos() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Relação de Ativos</h2>
      </div>
    </div>
  )
}
