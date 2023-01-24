import style from '../../styles/Layout.module.css'
import Nav from '../../Components/Sidebar/nav'

export default function Beneficiarios() {
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
              src="https://app.powerbi.com/view?r=eyJrIjoiNDczNDg5NzItNWJiZC00ODg0LTgyNjktOWUwYzZjNmUyYmYxIiwidCI6IjRiZDMyMmI4LWQ1MjYtNGY2ZC1iMGE1LTNkZjUyNGU1ZWEyOCJ9" 
              >
          </iframe>
        </div>
      </div>
    </div>
  )
}
