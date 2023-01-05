import Navbar from "../Components/sidebar"
import style from '../styles/Home.module.css'

export default function Systems() {
  return (
    <div className={style.layout}>
      <Navbar />
      <div className={style.layout2}>
        <h2>Systems</h2>
      </div>
    </div>
  )
}
