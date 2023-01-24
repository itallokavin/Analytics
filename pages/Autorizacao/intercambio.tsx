import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Intercambio() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
      <div className="dashboard">
        <iframe 
            title="Daschboard Intercâmbio" 
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/reportEmbed?reportId=8ecc59f9-d646-45fa-859f-42b61a71baff&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28" 
            frameBorder={0}  
            >
        </iframe>
    </div>
      </div>
    </div>
  )
}
