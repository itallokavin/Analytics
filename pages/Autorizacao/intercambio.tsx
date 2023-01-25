import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Intercambio() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Intercâmbio</h2>
      </div>
    </div>
  )
}
