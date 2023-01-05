import style from '../styles/Sidebar.module.css'
import React from "react";
import Image from 'next/image';
import Logo from '../assets/images/logo.png';
import Collapso from './collapso';
import Blink from './link';


export default function Sidebar() {

  return (
    <div className={style.nav}>
      <div className={style.logo}>
        <Image
          src={Logo}
          height={80}
          width={160}
          alt='logo'        
        />
      </div>
      <Blink label='Home' page='/'></Blink>
      <Collapso label='Logs' page='/portabilidade' items='Portabilidade'></Collapso>
      <Blink label='Systems' page='/systems'></Blink>
      <Blink label='Contact' page='/contact'></Blink>
    </div>
    )
  }
