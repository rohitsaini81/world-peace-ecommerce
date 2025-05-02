// import { useState } from 'react'
import Nav from './Compt/Nav'
import Home from './Compt/Home'
import Collections from './Compt/Collections'
import "./App.css"
import Login from './Compt/Auths/Login'
import axios from "axios"

import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Items from './Compt/Items'


// import Counter1 from './Redux/Counter.jsx'
import Cart from './Compt/Cart.jsx'
import Preview from "./Compt/Preview.jsx"
// import { useEffect } from 'react'
import { Provider } from "react-redux";
import store from "./Redux/Store.jsx"; 


// const __uri = "http://localhost:4000/scrape"
function App() {

  return (
    <>
    <Provider store={store}>
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
    </Provider>
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




export async function sendScrapeRequest() {
  try {
    const response = await axios.post(__uri, {
      searchQuery: "t-shirt",
      minPrice: 0,
      maxPrice: 80000,
      // brand: "HP"
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    // console.log('Response:', response.data);
    return response.data
  } catch (error) {
    return ('Error:', error.response ? error.response.data : error.message);
  }
}


export default App
