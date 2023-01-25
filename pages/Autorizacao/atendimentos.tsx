import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Atendimentos() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Atendimentos</h2>
      </div>
    </div>
  )
}
