"use client";

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "header" },
    { label: "About", href: "story" },
    { label: "Menu", href: "menu" },
    { label: "Contact", href: "contact" },
  ];

  const scrollWithOffset = (el) => {
    const yOffset = -80; // height of navbar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

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
          {links.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={scrollWithOffset}
              className="hover:text-yellow-500"
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden mr-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? (
              <FiX size={28} className='hover:text-yellow-500 cursor-pointer'/>
            ) : (
              <FiMenu size={28} className='hover:text-yellow-500 cursor-pointer'/>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white px-6 py-3 z-40 text-lg">
          {links.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={scrollWithOffset}
              onClick={() => setMenuOpen(false)}
              className="block py-1 hover:text-yellow-500"
            >
              {link.label}
            </HashLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
