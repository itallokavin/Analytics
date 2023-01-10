import Head from "next/head";
import React from "react"

type Props ={
    icon?: string;
    id?: string;
}

export default function Icon({icon,id}:Props){
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
            </Head>
            <i id= {id} className={icon}></i>
        </>
    )
}