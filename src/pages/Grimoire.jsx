import recipes from '../data/recipes';
import { Link } from 'react-router-dom';
import { Star, Trash2, Book, Sparkles, User } from 'lucide-react';

function Grimoire() {
  return (
    <>
            <div className="py-24 flex flex-col justify-center items-center text-center px-4">

         <h1 className="text-6xl md:text-7xl text-gray-100 drop-shadow-md">The Grimoire</h1>
        <h3 className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
        Ancient recipes and mystical potions await your discovery. Each spell has been carefully crafted to nourish both body and soul.        </h3>
    </div>
    </>
  )
}

export default Grimoire
