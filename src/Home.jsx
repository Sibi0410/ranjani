
import React from 'react'
const Home = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>03</div>
    </div>
      <div class="table w-full">
  <div class="table-header-group">
    <div class="table-row font-bold text-2xl text-center">
      <div class="table-cell text-center  border p-4 ">Fruits</div>
      <div class="table-cell text-cneter  border p-4">Kg</div>
      <div class="table-cell text-center  border p-4">Price</div>
    </div>
  </div>
  <div class="table-row-group">
    <div class="table-row text-center">
      <div class="table-cell border p-2">Apple</div>
      <div class="table-cell border p-2">1</div>
      <div class="table-cell border p-2">190</div>
    </div>
    <div class="table-row text-center">
      <div class="table-cell border p-2">Orange</div>
      <div class="table-cell boder p-2">1</div>
      <div class="table-cell border p-2">100</div>
    </div>
    <div class="table-row text-center">
      <div class="table-cell border p-2">Goa</div>
      <div class="table-cell border p-2">1</div>
      <div class="table-cell border p-2">100</div>
    </div>
  </div>
</div>
<br />
<br />

      <div className="columns-2 ">
        <p>Well, let me tell you something, ...</p>
        <p className="break-after-column">Sure, go ahead, laugh...</p>
        <p>Maybe we <span class="inline-block">display:inline-block</span> can live without...</p>
        <p>Look. If you think this is...</p>
      </div>
      <button class="hover:text-white ml-140 bg-green-600 hover:focus:bg-green-700 rounded-2xl p-4 text-4xl text-center">Click Me</button>
      <br />
      <br />
        <h1 className="text-4xl font-bold text-center">Grid Concept</h1>
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