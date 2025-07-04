import { useState, useEffect } from 'react';

import NavBar from "./components/NavBar"
import Aurora from './components/AuroraBackground'
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home'
import Grimoire from './pages/Grimoire'
import MySpells from './pages/MySpells'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SpellDetails from './pages/SpellDetails'
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 2000);
  return () => clearTimeout(timer);
}, []);

if (loading) return <Loader />;
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />

  <div className="relative min-h-screen w-full overflow-hidden text-gray-100 font-jim">
    <div className="absolute inset-0 -z-10">
    <div className="fixed inset-0 -z-10 h-full w-full">
        <Aurora
          colorStops={["#3A29FF", "#6B1D87", "#26154D"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
    </div>

    <NavBar />

    <div className="pt-24 px-4">
            <Routes>
            <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Home />} />
              <Route path="/grimoire" element={<Grimoire />} />
              <Route path="/spell/:id" element={<SpellDetails />} />
              

              <Route path="/myspells" element={<MySpells />} />
              
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Footer />

    </div>
  </div>
</BrowserRouter>

    </>
  )
}

export default App
