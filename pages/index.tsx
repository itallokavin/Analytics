import style from '../styles/Layout.module.css'
import Nav from '../Components/Sidebar/nav'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <div className={style.layout}>
        <Nav />
        <div className={style.layout2}>
          <h2>Página Inicial</h2>
        </div>
      </div>
    </>
  )
}
