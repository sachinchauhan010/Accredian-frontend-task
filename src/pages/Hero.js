import React from 'react'
import PromoCard from '../components/PromoCard'
import Header from '../components/Header'
import HeroSection1 from '../components/HeroSection1'
import HeroSection2 from '../components/HeroSection2'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

function Hero() {
  return (
    <div>
      <Header/>
      <PromoCard/>
      <HeroSection1/>
      <HeroSection2/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default Hero
