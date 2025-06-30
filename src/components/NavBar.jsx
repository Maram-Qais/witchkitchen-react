import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { House, BookBookmark, UserCircleGear } from 'phosphor-react';
import { Wand2, Sparkles, LogOut } from 'lucide-react';

function NabBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { label: 'Home', path: '/', icon: <House size={20} /> },
    { label: 'MySpells', path: '/myspells', icon: <Wand2 size={20} /> },
    { label: 'Grimoire', path: '/grimoire', icon: <BookBookmark size={20} /> },
    { label: 'About', path: '/about', icon: <Sparkles size={20} /> },
  ];

  return (
    <nav className='bg-black/80 text-gray-100 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link to="/" className="text-2xl tracking-wide hover:text-rose-300 transition-all font-bold glow-text">
          Witch Kitchen
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 items-center'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-2 font-medium hover:text-rose-300 transition-all ${
                location.pathname === item.path ? 'text-rose-300' : 'text-gray-100'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          {/* Auth Section */}
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-rose-300 font-work">{user.name}</span>
              <button
                onClick={logout}
                className="text-gray-300 hover:text-red-500 transition"
                title="Log Out"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className={`flex items-center gap-2 font-medium hover:text-rose-300 transition-all ${
                location.pathname === '/signin' ? 'text-rose-300' : 'text-gray-100'
              }`}
            >
              <UserCircleGear size={20} />
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden px-4 pb-4 space-y-3 bg-black/90'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 flex items-center gap-2 font-medium hover:text-rose-300 transition-all ${
                location.pathname === item.path ? 'text-rose-300' : 'text-gray-100'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          {/* Mobile Auth Section */}
          {user ? (
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-700 mt-4">
              <span className="text-sm text-rose-300 font-work">{user.name}</span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:text-red-500 transition"
                title="Log Out"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              onClick={() => setIsOpen(false)}
              className={`block py-2 flex items-center gap-2 font-medium hover:text-rose-300 transition-all ${
                location.pathname === '/signin' ? 'text-rose-300' : 'text-gray-100'
              }`}
            >
              <UserCircleGear size={20} />
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default NabBar;
