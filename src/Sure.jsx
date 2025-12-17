import React from 'react'

const sure = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mb-6">
    CSS GRID LAYOUT
  </h1>
  <div className="grid grid-cols-4 gap-1 bg-amber-200 p-2">

    {/* Header */}
    <div className="col-span-4 bg-white p-4 text-center">
      <h2 className="text-xl font-semibold">My header</h2>
    </div>

    {/* Menu */}
    <div className="col-span-1 bg-white p-4 text-center">
      <a href="https://github.com/Sibi0410" class="block text-blue-600 underline">Link 1</a>
      <a href="https://www.w3schools.com/" class="block text-blue-600 underline">Link 2</a>
      <a href="https://web.whatsapp.com/" class="block text-blue-600 underline">Link 3</a>
    </div>
    <div className="col-span-3 bg-white p-4 text-center">
      <h3 className="text-lg font-semibold mb-2">Artificial Intelligence</h3>
      <p className="text-gray-700">
        AI in education uses smart technologies to personalize learning, automate tasks like grading,
        and boost accessibility, creating adaptive platforms, virtual tutors, and data insights for
        educators to support individual student needs, improve engagement, and bridge learning gaps
        for diverse learners.
      </p>
    </div>

    {/*Footer */}
    <div className="col-span-4 bg-white p-4 text-center">
      <h4 className="font-medium">My footer</h4>
    </div>
    </div>
    </div>
  )
}

export default sure