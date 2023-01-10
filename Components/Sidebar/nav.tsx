import style from '../../styles/Nav.module.css'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import SubMenu from './submenu'
import { useRouter } from 'next/router'
import Icon from '../Icons/Icons'

export default function Nav(){
    const router = useRouter();

    return(
        <>
            <div className={style.nav}>
                <div className={style.logo}>
                    <Image
                    src={Logo}
                    height={80}
                    width={160}
                    alt='logo'        
                    />
                </div>
                <div className={style.menu}>
                    <a className={style.option}  href="#" onClick={() => router.push('/')}><Icon icon='fa fa-home'/>Página Inicial</a>
                </div>
                <div className={style.menu}> 
                    <SubMenu 
                        title="Logs"
                        titleIcon='fa-solid fa-clock-rotate-left'
                        items={[
                            {label: 'Portabilidade', url: '/portabilidade'},
                        ]}
                    />
                </div>
                <div className={style.menu}>
                    <a className={style.option}  href="#" onClick={() => router.push('/systems')}><Icon icon='fa-solid fa-microchip'/>Sistemas</a>
                </div>
                <div className={style.menu}>
                    <a className={style.option}  href="#" onClick={() => router.push('/contact')}><Icon icon='fa-solid fa-comment'/>Contato</a>
                </div>
                
            </div>
        </>
    )
}