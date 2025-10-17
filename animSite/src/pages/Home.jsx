import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Marque from '../sections/Marque'
import Work from '../sections/Work'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Marque/>
      <CTA/>
    </>
  )
}

export default Home
