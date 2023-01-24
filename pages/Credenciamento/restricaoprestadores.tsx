import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function RestricaoPrestadores() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <div className="dashboard">
            <iframe 
                title="Infomed - Painel Credenciamento" 
                width="100%" 
                height="100%" 
                src="https://app.powerbi.com/reportEmbed?reportId=96a0d607-1ed1-4ed8-aedb-c2bc235b2584&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28" 
                frameBorder={0}
                >
            </iframe>
        </div>
      </div>
    </div>
  )
}
