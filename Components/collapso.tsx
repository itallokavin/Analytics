import Link from "next/link"
import { useState } from "react";
import style from '../styles/Sidebar.module.css'
import * as Collapsible from '@radix-ui/react-collapsible';
import { Cross2Icon, ArrowDownIcon } from '@radix-ui/react-icons';

interface Iprops{
  label: string;
  items?: string;
  page: string;
}

export default function Collapso(props: Iprops){
    const {label,items,page} = props;
    const [open, setOpen] = useState(false);
    return(
        <>
            <Collapsible.Root className={style.CollapsibleRoot} open={open} onOpenChange={setOpen}>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <span className={style.text}>
                    {label}
                </span>
                <Collapsible.Trigger asChild>
                    <button className={style.IconButton}>{open ? <Cross2Icon /> : <ArrowDownIcon />}</button>
                </Collapsible.Trigger>
                </div>
                <Collapsible.Content className={style.CollapsibleContent}>
                    <div>
                        <Link className={style.link}
                        href={page}
                        >{items}
                        </Link>
                    </div>
                </Collapsible.Content>
            </Collapsible.Root>
        </>
    )

}