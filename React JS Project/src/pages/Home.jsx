import React from 'react'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Clients from '../components/Clients'
import Cta from '../components/Cta'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
        <Clients />
        <Cta />
        <Footer />

    </div>
  )
}
