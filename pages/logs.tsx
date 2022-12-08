import Navbar from "../Components/nav"
import style from '../styles/Home.module.css'

export default function Logs() {
  return (
    <div className={style.layout}>
      <Navbar />
      <div className={style.layout2}>
        <h2>Logs</h2>
      </div>
    </div>
  )
}
