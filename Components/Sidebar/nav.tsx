import style from '../../styles/Nav.module.css'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import SubMenu from './submenu'
import { useRouter } from 'next/router'


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
                    <a className={style.option}  href="#" onClick={() => router.push('/')}>Home</a>
                </div>
                <div className={style.menu}>   
                    <SubMenu 
                        title="Logs"
                        items={[
                            {label: 'Portabilidade', url: '/portabilidade'},
                        ]}
                    />
                </div>
                <div className={style.menu}>
                    <a className={style.option}  href="#" onClick={() => router.push('/systems')}>Systems</a>
                </div>
                <div className={style.menu}>
                    <a className={style.option}  href="#" onClick={() => router.push('/contact')}>Contact</a>
                </div>
                
            </div>
        </>
    )
}