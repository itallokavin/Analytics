import style from '../styles/Layout.module.css'
import Nav from '../Components/Sidebar/nav'

export default function Contact() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Contact</h2>
      </div>
    </div>
  )
}
