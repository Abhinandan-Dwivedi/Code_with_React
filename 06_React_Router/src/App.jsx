import { useState } from 'react'
// import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './componants/Header'
import Footer from './componants/Footer'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header />
        
       <Outlet />
        
       <Footer />
    </>
  )
}

export default App
