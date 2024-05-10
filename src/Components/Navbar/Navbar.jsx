import React from 'react'
import style from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button, { btnVarient } from '../Button/Button'

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <Logo/>
            <Button varient={btnVarient.LIGHTBLUE} handleClick={()=>{console.log('My Bookings btn')}} btnText={'My Bookings'}></Button>
        </div>
    )
}
