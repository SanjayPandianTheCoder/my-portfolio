import { useState } from 'react'
import './App.css'
import Hero from './section/Hero/Hero'
import Project from './section/Projects/Project'
import Contact from './section/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
