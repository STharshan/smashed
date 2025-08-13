import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
        {/* Column 1 */}
        <div>
          <img
            className="h-25 w-20 font-serif tracking-widest ml-8 sm:ml-5"
            src="/logo.png"
            alt="logo"
          />
          <p className="text-md font-semibold text-gray-400 mb-4">
            Where comfort meets crave-worthy. Bite into our signature burgers, golden fries, and urban-inspired eats in the heart of the city.
          </p>
          <div className="flex space-x-4 text-white">
            <a href="https://web.facebook.com/people/Smashed-Ashby/61570892613518/?_rdc=1&_rdr#" className="hover:text-blue-700"><FaFacebookF /></a>
            <a href="https://www.instagram.com/smashed.ashby/" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://twitter.com/yourhandle" className="hover:text-sky-500"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Quick Links</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li><a href="#header" className="hover:text-gray-300">Home</a></li>
            <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Our Menu</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li><a href="#" className="hover:text-gray-300">Chef Specials</a></li>
            <li><a href="#" className="hover:text-gray-300">Burgers</a></li>
            <li><a href="#" className="hover:text-gray-300">Tawa</a></li>
            <li><a href="#" className="hover:text-gray-300">Kebab Rools</a></li>
            <li><a href="#" className="hover:text-gray-300">Biriyani</a></li>
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-5">Contact Info</h3>
          <ul className="space-y-2 text-md text-gray-400 font-semibold">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1 text-green-600" />
              85a Market Street,<br />
              Ashby LE65 1AH
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-green-600" />01530 648 708
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-green-600" />smashedashby@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />

      {/* Bottom Bar */}
      <div className="text-center text-md text-white font-semibold">
        © 2025 Smashed. All rights reserved. Made with <span className="text-red-500">❤️</span> for authentic food lovers.
      </div>
      <div className=" mt-2 text-center font-semibold">
        <p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"  // Replace this with the actual Ansely website
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
