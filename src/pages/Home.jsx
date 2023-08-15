import React from 'react'
import Hero from '../components/Hero'
// import Services from '../components/Services'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Pizza from '../components/Pizza'
import Burger from '../components/Burger'
// import Salad from '../components/Salad'
// import Fries from '../components/Fries'
import Drink from '../components/Drink'
// import SaleBanner from '../components/SaleBanner'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
        <Hero />
        {/* <Services /> */}
        <Menu />
        <Pizza />
        <Burger />
        {/* <Salad /> */}
        {/* <SaleBanner /> */}
        {/* <Fries /> */}
        <Drink />
        <Contact />
        <Footer />
    </>
    
  )
}

export default Home