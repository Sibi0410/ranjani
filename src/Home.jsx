
import React from 'react'
const Home = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Grid Concept</h1>
        <div className="
        grid
        grid-cols-3
        bg-blue-500
        justify-around
        gap-12
        p-3
        ">
        <div className="bg-gray-100 border-4 border-black p-5 text-3xl text-center">1</div>
        <div className="bg-gray-100 border-4 border-black p-5 text-3xl text-center">2</div>
        <div className="bg-gray-100 border-4 border-black p-5 text-3xl text-center">3</div>
        <div className="bg-gray-100 border-4 border-black p-5 text-3xl text-center">4</div>
        <div className="bg-gray-100 border-4 border-black p-5 text-3xl text-center">5</div>
        <div className="bg-gray-100 border-4 border-black p-5 text-3xl text-center">6</div>
    </div>


</div >
  )
}

export default Home