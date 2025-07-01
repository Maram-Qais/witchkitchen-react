import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MoonStar } from 'lucide-react'	

function SignIn() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = signin(email, password);
    if (result.success) {
      navigate('/myspells');
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black/10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f1a] border border-purple-900 p-8 rounded-2xl w-full max-w-md shadow-xl backdrop-blur-md"
      >
        {/* Animated Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-jim text-center text-cream mb-6 flex items-center justify-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <MoonStar className="w-6 h-6 text-yellow-300" />

          </motion.div>
          Join the Circle
        </motion.h1>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center font-work">
            {error}
          </p>
        )}

        <label className="block text-cream font-work mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white mb-4 outline-none focus:ring-2 ring-purple-500"
        />

        <label className="block text-cream font-work mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white mb-6 outline-none focus:ring-2 ring-purple-500"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-all font-semibold tracking-wide"
        >
          Enter the Circle
        </button>
      </form>
    </div>
  );
}

export default SignIn;
