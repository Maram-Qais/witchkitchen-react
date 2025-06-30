import { useState, useMemo } from 'react';
import recipes from '../data/recipes';
import GrimoireFilterBar from '../components/GrimoireFilterBar';
import SpellCard from '../components/SpellCard';

function Grimoire() {
  const [selectedElement, setSelectedElement] = useState('All');
  const [selectedIntention, setSelectedIntention] = useState('All');

  const filteredRecipes = useMemo(() => {
    return recipes.filter((r) => {
      const elementMatch =
        selectedElement === 'All' || r.element === selectedElement;
      const intentionMatch =
        selectedIntention === 'All' ||
        r.intention.toLowerCase() === selectedIntention.toLowerCase();
      return elementMatch && intentionMatch;
    });
  }, [selectedElement, selectedIntention]);

  return (
    <>  
      <div className="flex flex-col justify-center items-center text-center px-4">
      <p className="text-center text-cream/70 italic text-sm mb-2 mt-2">
  Unlock ancient recipes and mystical spells to nourish both body and soul.
</p>


      </div>

    <GrimoireFilterBar
        selectedElement={selectedElement}
        setSelectedElement={setSelectedElement}
        selectedIntention={selectedIntention}
        setSelectedIntention={setSelectedIntention}
      />

      <p className='text-gray-300 text-center mb-2 mt-2'>
        

        {filteredRecipes.length} spells found
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
        {filteredRecipes.map((recipe) => (
          <SpellCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}

export default Grimoire;
