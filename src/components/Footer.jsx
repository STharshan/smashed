"use client";

import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-8 text-left">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <img
            className="h-20 w-auto mb-4"
            src="/logo.png"
            alt="logo"
          />
          <p className="text-sm md:text-base font-semibold text-gray-400 mb-4">
            Where comfort meets crave-worthy. Bite into our signature burgers, golden fries, and urban-inspired eats in the heart of the city.
          </p>
          <div className="flex space-x-4 text-white text-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.facebook.com/people/Smashed-Ashby/61570892613518/?_rdc=1&_rdr#"
              className="hover:text-blue-700 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/smashed.ashby/"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-md text-gray-400 font-semibold">
            <li>
              <HashLink smooth to="/#header" className="hover:text-gray-300 transition-colors">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#menu" className="hover:text-gray-300 transition-colors">
                Menu
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#story" className="hover:text-gray-300 transition-colors">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact" className="hover:text-gray-300 transition-colors">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5">Our Menu</h3>
          <ul className="space-y-2 text-sm md:text-md text-gray-400 font-semibold">
            <li><HashLink smooth to="/#burger-special" className="hover:text-gray-300 transition-colors">Burger Special Meal</HashLink></li>
            <li><HashLink smooth to="/#smashed-burgers" className="hover:text-gray-300 transition-colors">Smashed Burgers</HashLink></li>
            <li><HashLink smooth to="/#chicken-burgers" className="hover:text-gray-300 transition-colors">Smashed Chicken Burgers</HashLink></li>
            <li><HashLink smooth to="/#loaded-fries" className="hover:text-gray-300 transition-colors">Loaded Fries</HashLink></li>
            <li><HashLink smooth to="/#sides" className="hover:text-gray-300 transition-colors">Sides</HashLink></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-3 text-sm md:text-md text-gray-400 font-semibold">
            <li className="flex items-start gap-2">
              <MapPin className="mt-1 text-yellow-500 flex-shrink-0" size={16} />
              <a
                href="https://www.google.com/maps?q=85a+Market+Street,+Ashby+LE65+1AH"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-400"
              >
                85 Market Street,<br />Ashby LE65 1AH
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-yellow-500 flex-shrink-0" size={16} />
              <a
                href="https://wa.me/441530648708"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-400"
              >
                01530 648 708
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-yellow-500 flex-shrink-0" size={16} />
              <a
                href="mailto:smashedashby@gmail.com"
                className="hover:underline text-gray-400"
              >
                smashedashby@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm md:text-md font-semibold">
        <div className="flex gap-4 text-gray-400">
          <HashLink smooth to="/privacy-policy" className="hover:text-yellow-500 transition-colors">
            Privacy Policy
          </HashLink>
          <span className="text-gray-600">|</span>
          <HashLink smooth to="/terms-conditions" className="hover:text-yellow-500 transition-colors">
            Terms & Conditions
          </HashLink>
        </div>
      </div>

      <p className="text-center mt-2">
        Powered by{" "}
        <a
          href="https://www.ansely.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:underline transition-colors"
        >
          Ansely
        </a>
      </p>
    </footer>
  );
}
