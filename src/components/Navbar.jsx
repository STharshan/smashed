import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          className="h-20 w-20 font-serif tracking-widest ml-4 sm:ml-6"
          src="/logo.png"
          alt="logo"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold text-lg mx-auto">
          <a href="#header" className="hover:text-yellow-500">Home</a>
          <a href="#story" className="hover:text-yellow-500">About</a>
          <a href="#menu" className="hover:text-yellow-500">Menu</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mr-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FiX size={28} className='hover:text-yellow-500 cursor-pointer'/> : <FiMenu size={28} className='hover:text-yellow-500 cursor-pointer'/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white px-6 py-3 z-40 text-lg">
          <a href="#header" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-yellow-500">Home</a>
          <a href="#story" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-yellow-500">About</a>
          <a href="#menu" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-yellow-500">Menu</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-1 hover:text-yellow-500 mb-5">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
