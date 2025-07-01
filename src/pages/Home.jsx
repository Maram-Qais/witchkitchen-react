import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import recipes from '../data/recipes';
import { Flame, Droplets, Leaf, Wind, Sparkles } from 'lucide-react';

function Home() {
  const featuredRecipes = recipes.slice(0, 3);

  const getElementClasses = (element) => {
    switch (element) {
      case 'Fire':
        return {
          badge: 'text-red-400',
          base: 'bg-red-900/10',
          hover: 'hover:bg-red-900/20 hover:shadow-red-500/40',
          shadow: 'shadow-red-500/20',
        };
      case 'Water':
        return {
          badge: 'text-blue-400',
          base: 'bg-blue-900/10',
          hover: 'hover:bg-blue-900/20 hover:shadow-blue-400/40',
          shadow: 'shadow-blue-400/20',
        };
      case 'Earth':
        return {
          badge: 'text-green-400',
          base: 'bg-green-900/10',
          hover: 'hover:bg-green-900/20 hover:shadow-green-500/40',
          shadow: 'shadow-green-500/20',
        };
      case 'Air':
        return {
          badge: 'text-cyan-400',
          base: 'bg-cyan-900/10',
          hover: 'hover:bg-cyan-900/20 hover:shadow-cyan-400/40',
          shadow: 'shadow-cyan-400/20',
        };
      default:
        return {
          badge: 'text-gray-300',
          base: 'bg-gray-700/10',
          hover: 'hover:bg-gray-700/20 hover:shadow-md',
          shadow: 'shadow-gray-500/20',
        };
    }
  };

  const getElementIcon = (element) => {
    switch (element) {
      case 'Fire': return <Flame className="w-5 h-5 text-red-400" />;
      case 'Water': return <Droplets className="w-5 h-5 text-blue-400" />;
      case 'Earth': return <Leaf className="w-5 h-5 text-green-400" />;
      case 'Air': return <Wind className="w-5 h-5 text-cyan-400" />;
      default: return null;
    }
  };

  return (
    <>
      <div className="py-24 flex flex-col justify-center items-center text-center px-4">
        <Hero />
      </div>

      {/* FEATURED SPELLS SECTION */}
      <section className="relative py-20 px-4 text-center">
        <div className="text-4xl md:text-5xl font-jim text-cream mb-4 flex justify-center items-center gap-2">
          Featured Spells <span className="animate-spin-slow">🥄</span>
        </div>
        <p className="text-forest/70 max-w-2xl mx-auto mb-12 font-work text-lg md:text-xl">
          Begin your magical culinary journey with these enchanted recipes, carefully selected for their transformative properties and delicious outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredRecipes.map((recipe) => {
            const elementClass = getElementClasses(recipe.element);
            return (
              <div
                key={recipe.id}
                className={`border border-gray-800 rounded-2xl p-6 text-left transition-all duration-300 transform hover:-translate-y-3 shadow-md ${elementClass.base} ${elementClass.hover} ${elementClass.shadow}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`flex items-center gap-1 font-work font-medium ${elementClass.badge}`}>
                    {getElementIcon(recipe.element)}
                    {recipe.element}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(recipe.difficulty)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 text-yellow-300" />
                    ))}
                  </div>
                </div>

                <h3 className="text-yellow-200 text-xl font-semibold mb-2">{recipe.name}</h3>
                <p className="text-gray-300 font-work text-sm mb-4">{recipe.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-work text-sm">{recipe.intention}</span>
                  <Link
                    to={`/spell/${recipe.id}`}
                    className="text-yellow-200 border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400/10 transition"
                  >
                    Cast Spell
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-transparent py-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-jim text-purple-200 mb-6 drop-shadow-[0_0_15px_rgba(192,131,255,0.4)]">
          Ready to Begin Your Journey?
        </h2>

        <p className="font-work text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Step into a world where cooking becomes magic, where every ingredient holds power,
          <br className="hidden md:block" />
          and where every meal is a sacred ritual.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/grimoire">
            <button className="px-8 py-4 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition shadow-lg flex items-center gap-2 font-semibold">
              Explore All Spells ✨
            </button>
          </Link>
          <Link to="/about">
            <button className="px-8 py-4 rounded-full text-purple-300 border border-purple-500 hover:bg-purple-900/20 transition flex items-center gap-2 font-semibold">
              Learn Our Story 🌟
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
