import NavBar from "./components/NavBar"
import Aurora from './components/AuroraBackground'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home'
import Grimoire from './pages/Grimoire'
import MySpells from './pages/MySpells'
import About from './pages/About'
import SignIn from './pages/SignIn'

function App() {
  return (
    <>
   <BrowserRouter>
  <div className="relative min-h-screen w-full overflow-hidden text-gray-100 font-jim">
    {/* Aurora Background */}
    <div className="absolute inset-0 -z-10">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </div>

    {/* Layout */}
    <NavBar />

    {/* Page content */}
    <div className="pt-24 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grimoire" element={<Grimoire />} />
        <Route path="/myspells" element={<MySpells />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  </div>
</BrowserRouter>

    </>
  )
}

export default App
