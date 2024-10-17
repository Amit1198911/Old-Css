import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Slider from './components/hero'
import Hero from './components/hero'
import Product from './components/products'
import Trending from './components/trending'
import Sales from './components/sales'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Product/>
      <Trending/>
      <Sales/>
      <Product/>
    </>
  )
}

export default App
