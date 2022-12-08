import style from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/logo.png'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-solid-svg-icons'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
            <li className={style.category}>
              <div className={style.campIcon}>
                <FontAwesomeIcon 
                  icon={faHouse}
                  className={style.icon}
                />
              </div>
              <div className={style.campCategory}>
                <Link href="/">Home</Link>
              </div>
            </li>        
            <li className={style.category}>
              <div className={style.campIcon}>
                <FontAwesomeIcon 
                  icon={faClock}
                  className={style.icon}
                />
              </div>
              <div className={style.campCategory}>
                <Link href="/logs">Logs</Link>
              </div>
              <div className={style.campArrow}>
                <FontAwesomeIcon 
                  icon={faAngleRight}
                  className={style.iconArrow}
                />
              </div>
            </li>
        </ul>
      </div>
    )
  }
  