import { useAuth } from './useAuth';
import { useState, useEffect } from 'react';

export const useGrimoire = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user) {
      const saved = JSON.parse(localStorage.getItem(`witchsGrimoire_${user.id}`)) || [];
      setFavorites(saved);
    } else {
      setFavorites([]);
    }
  }, [user]);

  const toggleFavorite = (spellId) => {
    if (!user) {
      alert('🧙‍♀️ Please sign in to save spells.');
      return;
    }

    const updated = favorites.includes(spellId)
      ? favorites.filter((id) => id !== spellId)
      : [...favorites, spellId];

    setFavorites(updated);
    localStorage.setItem(`witchsGrimoire_${user.id}`, JSON.stringify(updated));
  };

  const isFavorite = (spellId) => favorites.includes(spellId);

  return { favorites, toggleFavorite, isFavorite };
};
