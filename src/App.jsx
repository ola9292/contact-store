import { useState } from 'react'
import './App.css'
import Home from './Home'
import Create from './Create'
import Navbar from './Navbar'
import { Routes, Route } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='parent-container'>
      <Navbar />
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="create" element={ <Create/> } />
          {/* <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
    </div>
    
    </>
  )
}

export default App
