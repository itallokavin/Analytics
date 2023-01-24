import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function ProducaoMedica() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <div className="dashboard">
          <iframe 
              title="Painel Produção Médica"  
              width="100%" 
              height="100%" 
              src="https://app.powerbi.com/reportEmbed?reportId=f85e132c-f190-4e40-87ea-faebc39bb8e8&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28"
              frameBorder={0}>
          </iframe>
        </div>
      </div>
    </div>
  )
}
