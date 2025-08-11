import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 py-2 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          className="h-16 w-16 sm:h-20 sm:w-20 font-serif tracking-widest ml-4 sm:ml-6"
          src="/logo.png"
          alt="logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold text-lg">
          <a href="#header" className="hover:text-green-700">Home</a>
          <a href="#story" className="hover:text-green-700">About</a>
          <a href="#menu" className="hover:text-green-700">Menu</a>
          <a href="#contact" className="hover:text-green-700">Contact</a>
        </div>

        {/* Order Now Button (Desktop) */}
        <div className="hidden md:flex mr-4">
          <button
            className="flex items-center space-x-2 bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-green-700 hover:text-white"
          >
            <FiShoppingCart />
            <span>Order Now</span>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mr-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={28} className='hover:text-green-700 cursor-pointer'/> : <FiMenu size={28} className='hover:text-green-700 cursor-pointer'/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white px-6 py-4 z-40 text-lg">
          <a href="#header" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-green-700">Home</a>
          <a href="#story" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-green-700">About</a>
          <a href="#menu" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-green-700">Menu</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-green-700 mb-5">Contact</a>
          <button
            className="flex items-center gap-2 bg-white text-black hover:bg-green-700 cursor-pointer hover:text-white px-4 py-2 rounded-md shadow"
          >
            <FiShoppingCart />
            <span>Order Now</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
