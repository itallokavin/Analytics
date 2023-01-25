import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function NovaComissao() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <h2>Nova Comissão</h2>
      </div>
    </div>
  )
}
