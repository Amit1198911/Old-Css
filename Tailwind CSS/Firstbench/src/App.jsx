import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Dashboard from './component/Dashboard'
import BarChart from './component/BarChart'
import LineChart from './component/LineChart'

function App() {

  return (
    <>
      <Navbar/>
      <Dashboard/>
    </>
  )
}

export default App
