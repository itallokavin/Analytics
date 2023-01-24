import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Dashboard() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <div className="dashboard">
            <iframe 
                title="RELATORIO DASHBOARD SAC" 
                width="100%" 
                height="100%" 
                src="https://app.powerbi.com/reportEmbed?reportId=722d1fa0-0cbd-4475-a127-898fa1082a80&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28" 
                frameBorder={0}>
            </iframe>
        </div>
      </div>
    </div>
  )
}
