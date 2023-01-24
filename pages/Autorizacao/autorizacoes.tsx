import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Autorizacoes() {
  return (
    <div className={style.layout}>
      <Nav />
      <div className={style.layout2}>
      <div className='dashboard'>
        <iframe 
				title="Painel Autorizacao" 
				width="100%" 
				height="100%" 
				src="https://app.powerbi.com/reportEmbed?reportId=1c2f0bcf-cf07-4280-bb27-117cb77ea130&autoAuth=true&ctid=4bd322b8-d526-4f6d-b0a5-3df524e5ea28" 				
				frameBorder={0}>
			</iframe>
    </div>
      </div>
    </div>
  )
}
