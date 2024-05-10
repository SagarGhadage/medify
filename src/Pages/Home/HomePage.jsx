import React from 'react'
import Header from '../../Components/Header/Header'
import Navbar from '../../Components/Navbar/Navbar'
import style from './HomePage.module.css'

export default function HomePage({ children }) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  )
}
