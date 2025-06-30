import React from 'react'
import recipes from '../data/recipes'

function GrimoireFilterBar({selectedElement, setSelectedElement, selectedIntention, setSelectedIntention}) {
  return (
      <div className='flex gap-3 flex-wrap justify-center'>
          {['All', 'Fire', 'Water', 'Earth', 'Air'].map((element) => (
              <button key={element}
                  onClick={() => setSelectedElement(element)}
                  className={`px-4 py-2 rounded-full ${
                      selectedElement === element
                      ? "bg-purple-700 text-white"
                      :  "bg-purple-200 text-purple-800"
                      }`}>
                  {element}

              </button>
          ))}
      <div className="flex gap-3 flex-wrap justify-center mt-6">
  {["All", "Healing", "Vitality", "Protection", "Love"].map((intention) => (
    <button
      key={intention}
      onClick={() => setSelectedIntention(intention)}
      className={`px-4 py-2 rounded-full ${
        selectedIntention === intention
          ? "bg-green-700 text-white"
          : "bg-green-200 text-green-800"
      }`}
    >
      {intention}
    </button>
  ))}
</div>

    </div>
  )
}

export default GrimoireFilterBar
