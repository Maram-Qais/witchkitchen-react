import React from 'react'
import { Link } from 'react-router-dom'
import ShinyText from '../components/ShinyText';

function Hero() {
  return (
    <>
         <h1 className="text-6xl md:text-7xl text-gray-100 drop-shadow-md">Witch's Kitchen</h1>
        <h2 className="mt-6 text-2xl md:text-3xl tracking-wide text-gray-200">Brew. Stir. Eat. Enchant.</h2>
        <h3 className="mt-4 text-lg md:text-xl max-w-2xl text-gray-400">
          Where ancient culinary magic meets modern nourishment. Discover recipes that feed not just the body, but the soul.
        </h3>
        <Link
          to="/grimoire"
          className="mt-8 px-6 py-3 rounded-full border border-purple-500 text-purple-100 hover:bg-purple-700/30 transition-all font-medium tracking-wider"
        >
          <ShinyText text="Browse the Grimoire" speed={0.1} />
        </Link>
    </>
  )
}

export default Hero
