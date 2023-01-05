import Sidebar from "../Components/sidebar"
import style from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={style.layout}>
      <Sidebar />
      <div className={style.layout2}>
        <h2>Home</h2>
      </div>
    </div>
  )
}
