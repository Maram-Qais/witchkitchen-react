import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useGrimoire } from '../hooks/useGrimoire';
import recipes from '../data/recipes';
import { Bookmark, BookmarkCheck, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

function SpellDetails() {
  const { id } = useParams();
  const spell = recipes.find((s) => s.id === id);

  const { user } = useAuth();
  const { grimoire, toggleFavorite } = useGrimoire();
  const isFavorite = grimoire?.some((s) => s.id === spell?.id);

  if (!spell) return <div className="text-center text-white py-20">Spell not found</div>;

  return (
    <motion.div
      className="min-h-screen px-6 py-28 text-cream max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-jim mb-2 text-purple-200 drop-shadow-[0_0_15px_rgba(192,131,255,0.5)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {spell.name}
        </motion.h1>
        <p className="text-forest/70 text-sm italic mb-4">{spell.description}</p>

        {/* Meta */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="bg-purple-900/50 text-purple-200 px-4 py-1 rounded-full text-sm">
            Element: {spell.element}
          </span>
          <span className="bg-rose-900/50 text-rose-100 px-4 py-1 rounded-full text-sm">
            Intention: {spell.intention}
          </span>
          <span className="bg-yellow-900/40 text-yellow-200 px-4 py-1 rounded-full text-sm">
            Difficulty: {spell.difficulty} ✧
          </span>
          <span className="bg-green-900/30 text-green-100 px-4 py-1 rounded-full text-sm">
            Cook Time: {spell.cookTime}
          </span>
        </div>
      </div>

      {/* Main Card */}
      <motion.div
        className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Ingredients */}
        <div>
          <h2 className="text-lg text-purple-100 mb-2 font-semibold tracking-wider">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-cream/80">
            {spell.ingredients.map((item, i) => (
              <li key={i}>✦ {item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h2 className="text-lg text-yellow-200 mb-2 font-semibold tracking-wider">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-cream/80">
            {spell.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Notes */}
        <div className="bg-purple-950/30 p-4 rounded-lg border border-purple-500/30">
          <h3 className="text-rose-200 font-semibold mb-1">🔮 Witch’s Note</h3>
          <p className="text-cream/70 text-sm">{spell.notes}</p>
        </div>
      </motion.div>

      {/* Bottom Actions */}
      <div className="mt-10 flex justify-between items-center">
        <Link
          to="/grimoire"
          className="text-sm text-purple-300 hover:text-purple-100 transition flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Back to Grimoire
        </Link>

        <button
          className="text-purple-300 hover:text-yellow-200 transition"
          onClick={() => {
            if (!user) {
              alert('Sign in to save this spell.');
              return;
            }
            toggleFavorite(spell);
          }}
        >
          {isFavorite ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
        </button>
      </div>
    </motion.div>
  );
}

export default SpellDetails;
