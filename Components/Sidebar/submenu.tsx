import {useEffect, useState} from "react";
import {useRouter} from 'next/router';

type Props = {
    title: string;
    items: { 
        label: string; 
        url: string;
    }[];
};

export default function SubMenu({title, items}:Props){
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
            <a href="#" onClick={() => setCollapsed(!collapsed)}>{title}</a>
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
        </>
    )

}