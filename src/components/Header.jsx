import React from "react";

const Header = () => {
  return (
    <section
      id="header"
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Braai</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Where comfort meets creativity. Experience our signature potato dishes and
          urban-inspired cuisine in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#menu">
            <button className="bg-green-700 cursor-pointer hover:bg-green-800 text-white px-6 py-2 rounded shadow">
              View Menu
            </button>
          </a>
          <a href="#contact">
          <button className="border cursor-pointer border-white hover:bg-white hover:text-black text-white px-6 py-2 rounded shadow">
            Make Reservation
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
