import { useState } from 'react'
import Nav from './Compt/Nav'
import Home from './Compt/Home'
import Collections from './Compt/Collections'
import "./App.css"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav /> 
     <main id='main'>
     <Home />
     <Collections />
     </main>
    </>
  )
}

export default App
