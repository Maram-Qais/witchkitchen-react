import { Star, Moon, Heart } from 'lucide-react';
import { Sparkle } from 'phosphor-react';

function Footer() {
  return (
    <footer className="bg-transparent text-center px-4 pt-12 pb-10 font-work text-gray-300 text-sm border-t border-purple-800/60">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl font-jim text-purple-300 flex justify-center items-center gap-2 mb-4 drop-shadow-[0_0_15px_rgba(192,131,255,0.5)]">
          <Star className="w-6 h-6 text-purple-300" />
          Witch’s Kitchen
          <Moon className="w-6 h-6 text-green-300" />
        </h2>
        <p className="italic text-gray-400 max-w-xl mx-auto">
          "In every recipe lies a spell, in every meal a ritual, in every shared dish a blessing."
        </p>
      </div>

      <div className="bg-white/5 border border-purple-700 rounded-2xl max-w-4xl mx-auto py-8 px-6 mb-12 backdrop-blur-sm shadow-md">
        <h3 className="text-xl text-yellow-300 font-playfair flex items-center justify-center gap-2 mb-4">
          <Sparkle weight="duotone" className="w-6 h-6 text-yellow-400 animate-pulse" />
          Ancient Wisdom
          <Sparkle weight="duotone" className="w-6 h-6 text-yellow-400 animate-pulse" />
        </h3>
        <p className="text-lg text-gray-100 font-work mb-2">
          "The kitchen is the heart of the home, and the witch's kitchen is the heart of magic itself. Here, we transform simple ingredients into nourishment for body and soul."
        </p>
        <p className="text-purple-400 text-sm mt-2">
          — Grandmother Moonweaver, Kitchen Witch of the Ancient Order
        </p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-3 text-gray-300 font-playfair mb-6 text-sm">
        <span>Blessed & Protected</span>
        <span>•</span>
        <span>Made with Intention</span>
        <span>•</span>
        <span>Crafted in Moonlight</span>
      </div>

      <div className="flex justify-center items-center gap-2 text-purple-300 font-medium mb-4">
        <Heart className="w-5 h-5 animate-pulse" />
        Created with love and ancient wisdom
        <Heart className="w-5 h-5 animate-pulse" />
      </div>

      <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
        © 2025 Witch’s Kitchen. All spells and recipes are for educational and inspirational purposes.
        Always consult your inner wisdom and dietary needs.
      </p>
    </footer>
  );
}

export default Footer;
