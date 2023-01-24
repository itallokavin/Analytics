import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function ContasMedicas() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
      <div className="dashboard">
        <iframe 
            title="Painel Contas Médica"  
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/reportEmbed?reportId=922b1462-9830-464c-af31-fddfcf7fe7f7&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28" 
            frameBorder={0}>
        </iframe>
    </div>
      </div>
    </div>
  )
}
