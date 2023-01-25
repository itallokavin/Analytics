import style from '../../styles/Nav.module.css'
import { useEffect, useState} from "react";
import {useRouter} from 'next/router';
import Icon from '../Icons/icons';

type Props = {
    label: string;
    icon?: string;
    url: string;
}

export default function Menu({label,icon,url}:Props){
    const router = useRouter();
    const [activeUrl, setActiveUrl] = useState('');

    useEffect(()=>{
        if(url === router.pathname){
            setActiveUrl(router.pathname);
        }
    },[]);
    return(
        <>
            <div className={style.menu}>
                <a   
                    href="#" 
                    onClick={() =>{ 
                        router.push(url); 
                        setActiveUrl(url);
                    }}
                    className={activeUrl === url? 'active' : ''}
                    >
                <Icon icon={icon}
                />
                {label}
                </a>
            </div>
        </>
    )
}