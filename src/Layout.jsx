/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import CardData from './components/cardData/CardData'

function Layout() {
  return (
    <>
    <Header/>
    <CardData />
    <Footer />
    </>
  )
}

export default Layout