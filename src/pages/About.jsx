import { motion } from 'framer-motion';
import { Sparkles, Heart, Moon, Leaf } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen px-4 py-24 text-center text-cream">
      {/* 1. The Witch’s Oath */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-jim mb-6 text-purple-300 flex justify-center items-center gap-2">
          <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Sparkles className="text-purple-400" />
          </motion.span>
          The Witch’s Oath
        </h2>

        <div className="bg-[#161627]/70 border border-purple-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-purple-200">A Legend Born from Ancient Wisdom</h3>
          <p className="text-gray-300 text-sm font-work leading-relaxed">
            In the time when the veil between worlds was thin, there lived a kitchen witch whose recipes were whispered about in sacred circles.
            Her name was Seraphina Moonweaver, and she understood that cooking was not merely about sustenance—it was about transformation.
          </p>
          <p className="text-gray-300 text-sm font-work leading-relaxed mt-4">
            From her cottage nestled between the oak groves and crystal streams, she gathered ingredients blessed by moonlight and charged with intention.
            Each recipe was a spell, each meal a ritual, each shared dish a blessing that connected souls across time and space.
          </p>
          <p className="text-gray-300 text-sm font-work leading-relaxed mt-4">
            Today, her legacy lives on through this digital grimoire, where ancient wisdom meets modern kitchens. Every recipe you find here carries
            the essence of her teachings: that food prepared with love is magic, and magic is real.
          </p>
        </div>
      </motion.div>

      {/* 2. Sacred Principles */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-20"
      >
        <h2 className="text-3xl md:text-4xl font-jim text-green-300 mb-10 flex items-center justify-center gap-2">
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Heart className="text-pink-400" />
          </motion.span>
          Sacred Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Principle 1 */}
          <div className="bg-[#121221]/80 p-6 rounded-2xl border border-purple-800 shadow-lg">
            <Heart className="text-purple-400 mb-4 mx-auto animate-pulse" size={40} />
            <h3 className="text-xl font-bold mb-2">Intentional Eating</h3>
            <p className="text-gray-300 text-sm font-work">
              Every meal is an opportunity to nourish not just the body, but the soul. We believe in cooking with love, gratitude, and purpose.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="bg-[#121221]/80 p-6 rounded-2xl border border-purple-800 shadow-lg">
            <Moon className="text-purple-400 mb-4 mx-auto animate-bounce" size={40} />
            <h3 className="text-xl font-bold mb-2">Seasonal Rituals</h3>
            <p className="text-gray-300 text-sm font-work">
              Following nature's rhythm, we embrace the energy of each season, using ingredients at their peak power and aligning with lunar cycles.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="bg-[#121221]/80 p-6 rounded-2xl border border-purple-800 shadow-lg">
            <Sparkles className="text-purple-400 mb-4 mx-auto animate-spin-slow" size={40} />
            <h3 className="text-xl font-bold mb-2">Herbal Harmony</h3>
            <p className="text-gray-300 text-sm font-work">
              Ancient wisdom meets modern nutrition through the careful selection of herbs and spices that heal, energize, and transform.
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3. Ancient Blessing */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto bg-[#161627]/70 border border-purple-800 rounded-2xl p-8"
      >
        <h2 className="text-xl md:text-2xl text-purple-400 font-jim flex justify-center items-center gap-2 mb-6">
          <Sparkles className="text-yellow-300 animate-ping" />
          Ancient Blessing
          <Sparkles className="text-yellow-300 animate-ping" />
        </h2>
        <blockquote className="text-lg md:text-xl font-work text-gray-200 mb-4 leading-relaxed">
          "May every meal you prepare be infused with love, may every bite nourish your deepest self, and may the magic of the kitchen bring healing,
          joy, and connection to all who gather at your table."
        </blockquote>
        <p className="text-purple-300 text-sm md:text-base mt-2">
          — Seraphina Moonweaver, Keeper of Kitchen Magic
        </p>
      </motion.div>
    </div>
  );
}

export default About;
