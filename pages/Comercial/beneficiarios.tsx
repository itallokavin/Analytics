import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Beneficiarios() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Beneficiários</h2>
      </div>
    </div>
  )
}
