import { Star, Moon, Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-transparent text-center px-4 pt-10 pb-6 font-work text-gray-300 text-sm border-t border-purple-800/60">
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-jim text-purple-300 flex justify-center items-center gap-2 mb-2">
          <Star className="w-5 h-5" />
          Witch’s Kitchen
          <Moon className="w-5 h-5 text-green-300" />
        </h2>
        <p className="italic text-gray-400 max-w-md mx-auto text-sm">
          "A pinch of magic, a dash of soul."
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 text-gray-400 font-playfair mb-4 text-xs">
        <span>Made with Intention</span>
        <span>•</span>
        <span>Crafted under moonlight</span>
      </div>

      <p className="text-[11px] text-gray-500">
        © 2025 Witch’s Kitchen. Recipes are for inspiration and magical nourishment.
      </p>
    </footer>
  );
}

export default Footer;
