import { useState } from 'react'
import React from 'react'

import Navbar from './components/Navbar'
import { Herosection } from './components/Herosection'
import Features_section from './components/Features_section'
import Work_flow from './components/Work_flow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


function App() {


  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Herosection />
      <Features_section />
      <Work_flow />
      <Pricing />
      <Testimonials />
      <Footer />
      </div>
    </>
  )
}

export default App
