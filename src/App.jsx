import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import Breadcrumbs from './components/Breadcrumbs'

function App() {


  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <Hero />
      <Card />
      <Footer />
    </>
  )
}

export default App
