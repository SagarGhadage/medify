import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../Components/Header/Header';
import style from './MainPage.module.css'
export default function MainPage() {
  return (
    <div className={style.MainPage}>
        <Header/>
        <Outlet/>
    </div>
  )
}
