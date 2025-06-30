import { createContext, useContext, useEffect, useState } from 'react';

const GrimoireContext = createContext();

export const useGrimoire = () => {
  const context = useContext(GrimoireContext);
  if (!context) {
    throw new Error('useGrimoire must be used within a GrimoireProvider');
  }
  return context;
};

export const GrimoireProvider = ({ children }) => {
  const [grimoire, setGrimoire] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('witchsGrimoire');
    if (stored) setGrimoire(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('witchsGrimoire', JSON.stringify(grimoire));
  }, [grimoire]);

  const toggleFavorite = (spell) => {
    setGrimoire(prev => {
      const exists = prev.find(s => s.id === spell.id);
      if (exists) return prev.filter(s => s.id !== spell.id);
      return [...prev, spell];
    });
  };

  return (
    <GrimoireContext.Provider value={{ grimoire, toggleFavorite }}>
      {children}
    </GrimoireContext.Provider>
  );
};
