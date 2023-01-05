import Link from "next/link"
import style from "../styles/Link.module.css";

interface Iprops{
  label: string;
  page: string;
}

export default function Blink(props: Iprops){
    const {label,page} = props;
    return(
        <>
            <div className={style.menuItem}>
                <Link className={style.link}
                href={page}
                >
                {label}
                </Link>
            </div>
        </>
    )

}