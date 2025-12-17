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
    
      <div className='ml-5 pt-6'> 
      <button className="bg-sky-500 hover:bg-sky-700 p-3 mr-5 ">Save changes</button>
       <Home />
       <Sure />

        </div>

        
    </>
  )
}

export default App
