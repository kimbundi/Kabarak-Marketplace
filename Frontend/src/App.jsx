import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import Footer from './components/footer/Footer'
import Loginpopup from './components/loginpopup/Loginpopup'
import Verify from './pages/verify/Verify'
import Myorders from './pages/myorders/Myorders'



const App = () => {

  const [showLogin,  setShowLogin]  =  useState(false)

  
  return (
    <>
    {showLogin?<Loginpopup  setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Order' element={<Placeorder/>}/>
      <Route path='/verify' element={<Verify/>}/>
      <Route path="/myorders" element={<Myorders/>}/>
    </Routes>

    </div>
    <Footer/>
    </>

  )
}

export default App