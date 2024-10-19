import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gadget from './components/Gadget'
import Banner from './components/Banner'
import Product from './components/Product'
import Banner2 from './components/Banner2'
import Blogs from './components/Blogs'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Gadget/>
    <Banner/>
    <Product/>
    <Banner2/>
    <Blogs/>
    </>
  )
}

export default App
