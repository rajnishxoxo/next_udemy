import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import logo from "@/assets/logo.png"
import style from "./main-header.module.css"
import MainHeaderBackground from './main-header-background'
const MainHeader = () => {
   
  return (
    <>
    <MainHeaderBackground/>
    <header className={style.header}>
    <Link className={style.logo} href="/">
    <Image width={80} height={80} src={logo.src} alt='food on plate' priority/>
    NextLevel Food
    </Link>
    <nav className={style.nav}>
        <ul>
            <li>
                <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
                <Link href="/community">Community</Link>
            </li>
        </ul>
    </nav>
   </header>
    </>
   
  )
}

export default MainHeader