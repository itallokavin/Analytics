import {useEffect, useState} from "react";
import {useRouter} from 'next/router';
import Icon from "../Icons/Icons";
import style from '../../styles/Nav.module.css'

type Props = {
    title: string;
    titleIcon?: string;
    items: { 
        label: string;
        url: string;
    }[];
};

export default function SubMenu({title, items,titleIcon}:Props){
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(true);
    const [activeUrl, setActiveUrl] = useState('');

    useEffect(()=>{
        if(items.some(item => router.pathname === item.url)){
            setActiveUrl(router.pathname);
            setCollapsed(false);
        }
    },[]);

    return(
        <> 
            <div className={style.menu}> 
                <a href="#" onClick={() => setCollapsed(!collapsed)}>
                    <Icon icon={titleIcon} />
                    {title}
                    <Icon id="after" icon={collapsed? "fa-solid fa-arrow-down": "fa-solid fa-xmark"} />
                </a>
                <ul className={collapsed ? '' : 'expanded'}>
                    {items.map(item => (
                        <li key={item.url}>
                            <a 
                                href="#" 
                                onClick={() => {
                                    setActiveUrl(item.url);
                                    setCollapsed(true);
                                    router.push(item.url);
                                }}
                                className={activeUrl === item.url? 'active' : ''}
                                >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )

}