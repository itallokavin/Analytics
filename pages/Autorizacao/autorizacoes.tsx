import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Autorizacoes() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Autorizações</h2>
      </div>
    </div>
  )
}
