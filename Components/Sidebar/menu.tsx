import style from '../../styles/Nav.module.css'
import {useRouter} from 'next/router';
import Icon from '../Icons/Icons';
import { url } from 'inspector';

type Props = {
    label: string;
    icon?: string;
    url: string;
}

export default function Menu({label,icon,url}:Props){
    const router = useRouter();
    return(
        <>
            <div className={style.menu}>
                <a className={style.option}  href="#" onClick={() => router.push(url)}><Icon icon={icon}/>{label}</a>
            </div>
        </>
    )
}