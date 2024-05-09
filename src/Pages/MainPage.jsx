import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from '../Components/Header/Header';

export default function MainPage() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
