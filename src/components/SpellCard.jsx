import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useGrimoire } from '../hooks/useGrimoire';
import PopupModal from './PopupModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const elementColors = {
  Fire: {
    icon: '🔥',
    badge: 'text-red-400',
    hover: 'hover:bg-red-900/30 hover:shadow-red-500/40',
  },
  Water: {
    icon: '💧',
    badge: 'text-blue-400',
    hover: 'hover:bg-blue-900/30 hover:shadow-blue-400/40',
  },
  Earth: {
    icon: '🪴',
    badge: 'text-green-400',
    hover: 'hover:bg-green-900/30 hover:shadow-green-500/40',
  },
  Air: {
    icon: '🌀',
    badge: 'text-cyan-400',
    hover: 'hover:bg-cyan-900/30 hover:shadow-cyan-400/40',
  },
  default: {
    icon: '✨',
    badge: 'text-gray-400',
    hover: 'hover:bg-gray-700/30 hover:shadow-gray-400/40',
  },
};

function SpellCard({ recipe }) {
  const { user } = useAuth();
  const { grimoire, toggleFavorite } = useGrimoire();
  const [showModal, setShowModal] = useState(false);

  const isFavorite = grimoire?.some((spell) => spell.id === recipe.id);
  const { badge, hover, icon } = elementColors[recipe.element] || elementColors.default;

  const handleFavoriteClick = () => {
    if (!user) {
      setShowModal(true);
      return;
    }
    toggleFavorite(recipe);
  };

 
  return (
    <>
      <div
        className={`bg-[#0f0f1a] border border-gray-800 rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-2 ${hover}`}
      >
        <div className="flex justify-between items-center mb-2">
          <span className={`${badge} font-work font-medium`}>
            {icon} {recipe.element}
          </span>
          <div className="flex items-center gap-1">
            {Array(recipe.difficulty).fill().map((_, i) => (
              <span key={i} className="text-yellow-300">✨</span>
            ))}
          </div>
        </div>

        <Link to={`/spell/${recipe.id}`}>
  <h3 className="text-yellow-200 text-xl font-semibold mb-2 hover:underline">
    {recipe.name}
  </h3>
</Link>

        <p className="text-gray-300 font-work text-sm mb-4">{recipe.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-purple-400 font-work text-sm">{recipe.intention}</span>
          <div className="flex gap-2 items-center">
          <Link
  to={`/spell/${recipe.id}`}
  className="text-yellow-200 border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400/10 transition"
>
  Cast Spell
</Link>

            <button
              onClick={handleFavoriteClick}
              className="text-purple-300 hover:text-yellow-300 transition"
            >
              {isFavorite ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
            </button>
          </div>
        </div>
      </div>

      <PopupModal show={showModal} onClose={() => setShowModal(false)}>
        <h3 className="text-xl font-playfair mb-4">Sign In Required</h3>
        <p className="font-work text-sm text-gray-300 mb-4">
          You must sign in to save spells to your Grimoire.
        </p>
        <Link
          to="/signin"
          className="inline-block px-6 py-2 rounded-full bg-purple-700 text-white hover:bg-purple-800 transition"
        >
          Sign In Now
        </Link>
      </PopupModal>
    </>
  );
}

export default SpellCard;
