import { useState } from 'react'
import Nav from './Compt/Nav'
import Home from './Compt/Home'
import Collections from './Compt/Collections'
import "./App.css"
import Login from './Compt/Auths/Login'


import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Items from './Compt/Items'


import Counter1 from './Redux/Counter.jsx'
import Cart from './Compt/Cart.jsx'
import Preview from "./Compt/Preview.jsx"

function App() {

  return (
    <>

      <BRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/about" element={<Home />} />
          <Route path="/login" element={<main id='main'><Login /></main>} />
          <Route path='/items/:category' element={<main id='main'><Items /></main>} />
          <Route path='/item/:id' element={<main id='main'><Preview /></main>} />
          <Route path="/cart" element={<main id='main' ><Cart /></main>} />
          {/* <Route path="*" element={<Counter1 />} />  */}
        </Routes>
      </BRouter>
    </>
  )
}




export function MainHome() {
  return (
    <main id='main'>
      <Home />
      <Collections />
    </main>
  )
}


export default App
