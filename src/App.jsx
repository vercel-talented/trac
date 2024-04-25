import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Mission from './components/Mission'
import Ecosystem from './components/Ecosystem'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div style={{ width: "1400px" }}>
        <Navbar />
        <Intro />
        <Mission />
        <Ecosystem />
        <Footer />
      </div>
    </>
  )
}

export default App
