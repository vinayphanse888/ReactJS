import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='app-container'>
      <Navbar/>

      <div className="main-content">
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default App