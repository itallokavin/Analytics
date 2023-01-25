import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function PrevisaoValores() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Previsão de Valores</h2>
      </div>
    </div>
  )
}
