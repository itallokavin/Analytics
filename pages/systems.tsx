import style from '../styles/Layout.module.css'
import Nav from '../Components/Sidebar/nav'

export default function Systems() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Sistemas</h2>
      </div>
    </div>
  )
}
