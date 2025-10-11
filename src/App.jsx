import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Testimonials from './components/Testimonials'
import Product from './components/Product'
import Action from './components/Action'

function App() {

  return (
    <>
    <div className="flex bg-gray-100 flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <Feature />
      <Testimonials />
      <Product />
      <Action />
    </div>
    </>
  )
}

export default App
