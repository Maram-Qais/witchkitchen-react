import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0f0f1a] border border-gray-800 p-8 rounded-2xl w-full max-w-md shadow-md"
      >
        <h1 className="text-3xl font-jim text-center text-cream mb-6">Welcome back, Witch 🕯️</h1>

        {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}

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
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-all"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
