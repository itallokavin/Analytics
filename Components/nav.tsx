import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'

export default function Navbar() {
    return (
      <div className={style.nav}>
        <div className={style.logo}>
          <Image
            alt="logo"
            src={Logo}
            width={160}
            height={80}
            priority
          />
        </div>
        <ul className={style.list}>
            <li className={style.categoryHome}><Link href="/">Home</Link></li>        
            <li className={style.category}><Link href="/logs">Logs</Link></li>
        </ul>
      </div>
    )
  }
  