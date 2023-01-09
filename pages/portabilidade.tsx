import style from '../styles/Layout.module.css'
import Nav from '../Components/Sidebar/nav'

export default function Portabilidade() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Portabilidade</h2>
      </div>
    </div>
  )
}
