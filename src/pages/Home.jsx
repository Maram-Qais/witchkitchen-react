import { Link } from 'react-router-dom';
import Hero from '../components/Hero';




function Home() {
  return (
    <>
      <div className="py-24 flex flex-col justify-center items-center text-center px-4">
        <Hero/>

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
          {/* FIRE CARD */}
          <div className="bg-[#0f0f1a] border border-gray-800 rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:bg-red-900/30 hover:shadow-red-500/40 hover:shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-400 font-work font-medium">🔥 Fire</span>
              <span className="text-yellow-300">✨✨</span>
            </div>
            <h3 className="text-yellow-200 text-xl font-semibold mb-2">Phoenix Rising Stew</h3>
            <p className="text-gray-300 font-work text-sm mb-4">
              A fiery stew that ignites passion and courage within the soul.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-work text-sm">Vitality</span>
              <button className="text-yellow-200 border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400/10 transition">
                Cast Spell
              </button>
            </div>
          </div>

          {/* WATER CARD */}
          <div className="bg-[#0f0f1a] border border-gray-800 rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:bg-blue-900/30 hover:shadow-blue-400/40 hover:shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-blue-400 font-work font-medium">💧 Water</span>
              <span className="text-yellow-300">✨</span>
            </div>
            <h3 className="text-yellow-200 text-xl font-semibold mb-2">Moonwater Healing Soup</h3>
            <p className="text-gray-300 font-work text-sm mb-4">
              A silvery soup that soothes the spirit and heals emotional wounds.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-work text-sm">Healing</span>
              <button className="text-yellow-200 border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400/10 transition">
                Cast Spell
              </button>
            </div>
          </div>

          {/* EARTH CARD */}
          <div className="bg-[#0f0f1a] border border-gray-800 rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-2 hover:bg-green-900/30 hover:shadow-green-500/40 hover:shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-green-400 font-work font-medium">🪴 Earth</span>
              <span className="text-yellow-300">✨✨✨</span>
            </div>
            <h3 className="text-yellow-200 text-xl font-semibold mb-2">Earth Mother's Grounding Bread</h3>
            <p className="text-gray-300 font-work text-sm mb-4">
              A hearty, nurturing bread that connects you to the earth's stabilizing energy.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-work text-sm">Protection</span>
              <button className="text-yellow-200 border border-yellow-400 px-4 py-1 rounded hover:bg-yellow-400/10 transition">
                Cast Spell
              </button>
            </div>
          </div>
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
          <button className="px-8 py-4 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition shadow-lg flex items-center gap-2 font-semibold">
            Explore All Spells ✨
          </button>
          <button className="px-8 py-4 rounded-full text-purple-300 border border-purple-500 hover:bg-purple-900/20 transition flex items-center gap-2 font-semibold">
            Learn Our Story 🌟
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
