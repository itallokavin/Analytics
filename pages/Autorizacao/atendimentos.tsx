import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Atendimentos() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
        <div className='dashboard'>
          <iframe 
            title="Atendimentos Autorizacao" 
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/reportEmbed?reportId=a5dc3d0f-f1fb-4d0a-9341-849f701b4471&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28"
            frameBorder={0}
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}
