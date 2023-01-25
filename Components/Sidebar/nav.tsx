import style from '../../styles/Nav.module.css'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import SubMenu from './submenu'
import Menu from './menu'

export default function Nav(){

    return(
        <>
            <div className={style.nav}>
                <div className={style.logo}>
                    <h1 style={{fontSize:'45px',letterSpacing:'5px'}}>Logo</h1>
                </div>
                <Menu
                    label='Página Inicial'
                    icon='fa fa-home'
                    url='/'
                />
                <SubMenu 
                    title="Autorização"
                    titleIcon='fa-solid fa-file-pen'
                    items={[
                        {label: 'Atendimentos', url: '/Autorizacao/atendimentos'},
                        {label: 'Autorizações', url: '/Autorizacao/autorizacoes'},
                        {label: 'Dashboard Intercâmbio', url: '/Autorizacao/intercambio'},
                    ]}
                />
                <SubMenu 
                    title="Cadastro"
                    titleIcon='fa-solid fa-user-pen'
                    items={[
                        {label: 'Relação de Ativos', url: '/Cadastro/ativos'},
                    ]}
                />
                <SubMenu 
                    title="Comercial"
                    titleIcon='fa-sharp fa-solid fa-suitcase'
                    items={[
                        {label: 'Nova Comissão', url: '/Comercial/novacomissao'},
                        {label: 'Painel Beneficiários', url: '/Comercial/beneficiarios'},
                    ]}
                />
                <SubMenu 
                    title="Contas Médicas"
                    titleIcon='fa-solid fa-user-doctor'
                    items={[
                        {label: 'Produção Médica', url: '/ContasMedicas/producaomedica'},
                        {label: 'Contas Médicas', url: '/ContasMedicas/contasmedicas'},
                        {label: 'Previsão de Valores', url: '/ContasMedicas/previsaovalores'},
                    ]}
                />
                <SubMenu 
                    title="Credenciamento"
                    titleIcon='fa-solid fa-id-card'
                    items={[
                        {label: 'Restrição de Prestadores', url: '/Credenciamento/restricaoprestadores'},
                    ]}
                />
                <SubMenu 
                    title="Sac"
                    titleIcon='fa-solid fa-headset'
                    items={[
                        {label: 'Dashboard', url: '/Sac/dashboard'},
                    ]}
                />
            </div>
        </>
    )
}