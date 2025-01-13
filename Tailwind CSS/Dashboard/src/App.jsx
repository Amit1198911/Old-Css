import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import DashBoardCard from './components/DashBoardCard'
import TrustPoints from './components/Trustpoints'
import Globe from './components/Globe'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     <Navbar/>
     <Dashboard/>
     <TrustPoints/>
     <Globe/>
     <Newsletter/>
     <Footer/>
    </>
  )
}

export default App
