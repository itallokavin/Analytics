import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Ativos() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <div className="dashboard">
          <iframe title="Painel Comercial" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=b3941a19-16c1-4e33-9167-ea44e81cad50&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28" 
          frameBorder="0" 
          ></iframe>
        </div>
      </div>
    </div>
  )
}
