import { useGrimoire } from '../hooks/useGrimoire';
import { useAuth } from '../hooks/useAuth';
import { BookmarkMinus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function MySpells() {
  const { user } = useAuth();
  const { grimoire, toggleFavorite } = useGrimoire();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="text-center py-32 text-gray-300 font-work">
        <h2 className="text-2xl mb-4">You're not signed in 🕯️</h2>
        <button
          onClick={() => navigate('/signin')}
          className="px-6 py-3 rounded-full bg-purple-700 text-white hover:bg-purple-600 transition"
        >
          Sign In to View Your Grimoire
        </button>
      </div>
    );
  }

  if (grimoire.length === 0) {
    return (
      <div className="text-center py-32 text-gray-300 font-work">
        <h2 className="text-2xl mb-4">No spells in your Grimoire yet 🪄</h2>
        <p className="mb-6">Go explore the Grimoire and add spells you love!</p>
        <button
          onClick={() => navigate('/grimoire')}
          className="px-6 py-3 rounded-full bg-purple-700 text-white hover:bg-purple-600 transition"
        >
          Go to Grimoire
        </button>
      </div>
    );
  }

  return (
    <div className="py-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-jim text-cream text-center mb-12">Your Grimoire</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {grimoire.map((spell) => (
          <div
            key={spell.id}
            className="bg-[#0f0f1a] border border-gray-800 rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:bg-purple-900/10"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-purple-300 font-work font-medium">{spell.element}</span>
              <button
                className="text-red-400 hover:text-red-300 transition"
                onClick={() => toggleFavorite(spell)}
                title="Remove from Grimoire"
              >
                <BookmarkMinus size={20} />
              </button>
            </div>

            <h3 className="text-yellow-200 text-xl font-semibold mb-2">{spell.name}</h3>
            <p className="text-gray-300 font-work text-sm mb-4">{spell.description}</p>
            <span className="text-purple-400 font-work text-sm">{spell.intention}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySpells;
