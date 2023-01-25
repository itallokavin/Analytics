import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function ContasMedicas() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Contas Médicas</h2>
      </div>
    </div>
  )
}
