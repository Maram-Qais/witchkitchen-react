import { Link } from 'react-router-dom';
import { Ghost, ArrowLeftCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function NotFound() {
  return (
          <section className="min-h-screen flex flex-col items-center text-center px-6 pt-32 text-cream">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Ghost size={64} className="text-rose-400 animate-bounce mb-4" />
        <h1 className="text-6xl font-jim text-rose-300 drop-shadow-md">404</h1>
        <p className="text-xl font-work text-cream/80 mt-4">
          You’ve wandered into forbidden woods. There’s no spell here.
        </p>
      </motion.div>

      <Link
        to="/grimoire"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-rose-400 text-rose-300 hover:bg-rose-700/20 transition-all font-medium tracking-wide"
      >
        <ArrowLeftCircle size={20} />
        Return to the Grimoire
      </Link>
    </section>
  );
}

export default NotFound;
