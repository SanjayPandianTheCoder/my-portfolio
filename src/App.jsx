import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Footer/>
    </main>
  )
}

export default App
