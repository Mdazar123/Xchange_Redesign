import { useState } from 'react'
// import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/catergories/Category'
import Ads from './components/Ads/Ads'
import Works from './components/working/Works'
import Sellers from './components/sellers/Seller'
import About from './components/about/About'
import Trust from './components/Trust/Trust'
import Footer from './components/footer/Footer'


import './App.css'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Category />
      <Ads />
      <Works />
      <Sellers />
      <About />
      <Trust />
      <Footer />
    </>
  )
}

export default App
