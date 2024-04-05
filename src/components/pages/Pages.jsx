import React from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Home from "../home/Home"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Properties from "../properties/Properties"
import Services from "../services/Services"
import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/properties' element={<Properties/>} />
          <Route path='/pricing' element={<Pricing/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default Pages
