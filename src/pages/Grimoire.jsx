import recipes from '../data/recipes';
import { Link } from 'react-router-dom';
import { Star, Trash2, Book, Sparkles, User } from 'lucide-react';
import GrimoireFilterBar from '../components/GrimoireFilterBar';
import { useState } from 'react';
import SpellCard from '../components/SpellCard';

function Grimoire() {

  const [selectedElement, setSelectedElement] = useState('ALL')
  const [selectedIntention, setSelectedIntention] = useState("All");

  const filteredRecipes = recipes.filter((r) => {
    const elementMatch = selectedElement === "All" || r.element === selectedElement;
    const intentionMatch = selectedIntention === "All" || r.intention === selectedIntention;
    return elementMatch && intentionMatch;
  });
  
  return (
    <>
            <div className="py-24 flex flex-col justify-center items-center text-center px-4">

         <h1 className="text-6xl md:text-7xl text-gray-100 drop-shadow-md">The Grimoire</h1>
        <h3 className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
        Ancient recipes and mystical potions await your discovery. Each spell has been carefully crafted to nourish both body and soul.        </h3>
      </div>
      


      <GrimoireFilterBar
  selectedElement={selectedElement}
  setSelectedElement={setSelectedElement}
  selectedIntention={selectedIntention}
  setSelectedIntention={setSelectedIntention}
      />
      <p className='text-gray-300 text-center mt-4'>{ filteredRecipes.length} spells found</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols gap-8 mt-10'>
        {filteredRecipes.map((spell) =>
          <SpellCard key={spell.id} recipe={spell} />
        )}

      </div>
    </>
  )
}

export default Grimoire
