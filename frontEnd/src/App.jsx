import { useState } from 'react'
import Nav from './Compt/Nav'
import Home from './Compt/Home'
import Collections from './Compt/Collections'
import "./App.css"
import Login from './Compt/Auths/Login'


import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <>
      <BRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/about" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} />  */}
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
