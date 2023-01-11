import style from '../../styles/Nav.module.css'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import SubMenu from './submenu'
import { useRouter } from 'next/router'
import Menu from './menu'

export default function Nav(){
    const router = useRouter();

    return(
        <>
            <div className={style.nav}>
                <div className={style.logo}>
                    <a href="/">
                        <Image
                        src={Logo}
                        height={85}
                        width={160}
                        alt='logo'        
                        />
                    </a>
                    
                </div>
                <Menu
                    label='Página Inicial'
                    icon='fa fa-home'
                    url='/'
                />
                <SubMenu 
                    title="Logs"
                    titleIcon='fa-solid fa-clock-rotate-left'
                    items={[
                        {label: '2º via de Boletos', url: '/Logs/boleto'},
                        {label: 'Extrato IRPF', url: '/Logs/extrato'},
                        {label: 'Carta de Portabilidade', url: '/Logs/portabilidade'},
                        {label: 'Canal do Prestador', url: '/Logs/prestador'},
                    ]}
                    />
                <Menu
                    label='Sistemas'
                    icon='fa-solid fa-microchip'
                    url='/systems'
                />
                <Menu
                    label='Contato'
                    icon='fa-solid fa-comment'
                    url='/contact'
                />
            </div>
        </>
    )
}