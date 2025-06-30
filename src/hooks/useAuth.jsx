import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('witchUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signin = (email, password) => {
    if (email && password) {
      const userData = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        joinedAt: new Date().toISOString()
      };
      setUser(userData);
      localStorage.setItem('witchUser', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = (email, password, name) => {
    if (email && password && name) {
      const userData = {
        id: Date.now(),
        email,
        name,
        joinedAt: new Date().toISOString()
      };
      setUser(userData);
      localStorage.setItem('witchUser', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'All fields are required' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('witchUser');
    localStorage.removeItem('witchsGrimoire');
  };

  const value = {
    user,
    loading,
    signin,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};









