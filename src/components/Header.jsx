import React from "react";

const Header = () => {
  return (
    <section
      id="header"
      className="w-full h-screen bg-black bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Smashed</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Where comfort meets crave-worthy. Bite into our signature burgers, golden fries, and urban-inspired eats in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#menu">
            <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black px-6 py-2 font-bold rounded shadow">
              Ashby
            </button>
          </a>
          <a
            href="https://www.pronto-ny.com/ordering/restaurant/menu?restaurant_uid=ac4a6b17-c1a7-4cee-9d15-8f133982a3b3 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border cursor-pointer font-semibold border-gray-400 hover:bg-white hover:text-black text-white px-6 py-2 rounded shadow">
              Quorn
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
