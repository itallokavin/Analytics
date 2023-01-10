import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Extrato() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Extrato IRPF</h2>
      </div>
    </div>
  )
}
