import React, { Children } from 'react'
import style from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Button, { btnVarient } from '../Button/Button'

export default function Navbar({ children,transperent=0 }) {
    return (
        <div className={transperent ? style.transperent : style.navbar}>
            <Logo />
            {children}
            <div className={style.navlist}>
                <span className={style.span}>Find Doctors</span>
                <span className={style.span}>Hospitals</span>
                <span className={style.span}>Medicines</span>
                <span className={style.span}>Surgeries</span>
                <span className={style.span}>Software for Provider</span>
                <span className={style.span}>Facilities</span>
                <Button varient={btnVarient.LIGHTBLUE} handleClick={() => { console.log('My Bookings btn') }} btnText={'My Bookings'}></Button>
            </div>
        </div>
    )
}
