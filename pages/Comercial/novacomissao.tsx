import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function NovaComissao() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
      <div className="dashboard">
        <iframe 
            frameBorder={0} 
            title="Comercial" 
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/reportEmbed?reportId=69b9a167-8bfc-4c5f-802b-b987d580f3ec&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28" 
            >
        </iframe>
    </div>
      </div>
    </div>
  )
}
