import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Sure from './Sure'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div> 
       <Home />
       <Sure />

        </div>

        
    </>
  )
}

export default App
