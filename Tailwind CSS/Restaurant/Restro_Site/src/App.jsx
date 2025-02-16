import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Services from './components/Services'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
    </>
  )
}

export default App
