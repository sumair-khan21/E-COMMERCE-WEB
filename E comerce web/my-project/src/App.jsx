import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import { Route, Routes } from "react-router-dom";
import CardComp from './Components/CardComp'
import Home from './Components/Home'
import ProductDetails from './Components/ProductDetails'
import Footer from './Components/Footer'


function App() {
  return (
    <>
<Navbar/>
<Hero/>
<h1 className="text-3xl font-bold leading-none text-center mt-0 pt-0 text-amber-900">View Products</h1>
<Routes>
        <Route index element={<Home />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
