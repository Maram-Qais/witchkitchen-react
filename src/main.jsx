import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './hooks/useAuth'; 
import { GrimoireProvider } from './hooks/useGrimoire';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
    <GrimoireProvider>
        <App />
      </GrimoireProvider>
    </AuthProvider>
  </StrictMode>,
);
