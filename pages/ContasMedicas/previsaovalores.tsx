import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function PrevisaoValores() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <div className="dashboard">
          <iframe 
            title="Painel Previsao de Valores" 
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/reportEmbed?reportId=9e4d44dd-df15-4e6f-ae94-559b6569aadb&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28"
            frameBorder={0}  
            >
          </iframe>
        </div>
      </div>
    </div>
  )
}
