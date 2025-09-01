import React, { useEffect, useRef } from "react";

const Header = () => {
  const ashbyRef = useRef(null);
  const quornRef = useRef(null);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://www.fbgcdn.com/embedder/js/ewm2.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  const openAshby = (e) => {
    e.preventDefault();
    ashbyRef.current?.click();
  };

  const openQuorn = (e) => {
    e.preventDefault();
    quornRef.current?.click();
  };

  return (
    <section
      id="header"
      className="w-full h-screen relative overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"  // Ensure video doesn't go fullscreen on iOS
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/back.mp4" type="video/mp4" />
        {/* Fallback Image for devices where video autoplay doesn't work */}
        <img
          src="/fallback-image.jpg" // Replace with your fallback image
          alt="Background image"
          className="w-full h-full object-cover"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content - perfectly centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Smashed</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Where comfort meets crave-worthy. Bite into our signature burgers,
          golden fries, and urban-inspired eats in the heart of the city.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={openAshby}
            className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black px-6 py-2 font-bold rounded shadow"
          >
            Ashby
          </button>

          <button
            onClick={openQuorn}
            className="border cursor-pointer font-semibold border-gray-400 hover:bg-white hover:text-black text-white px-6 py-2 rounded shadow"
          >
            Quorn
          </button>
        </div>
      </div>

      {/* Hidden GloriaFood buttons */}
      <span
        ref={ashbyRef}
        className="glf-button hidden"
        data-glf-cuid="7312433f-ce55-48f7-86d0-167b893da3a0"
        data-glf-ruid="18373bd8-7754-4bf1-8900-0080409af4f6"
      >
        See MENU &amp; Order
      </span>

      <span
        ref={quornRef}
        className="glf-button hidden"
        data-glf-cuid="896b1dad-902d-446b-ad23-0f3c43524959"
        data-glf-ruid="a874b69d-f9b4-4c90-a514-4893b8f5245a"
      >
        See MENU &amp; Order
      </span>
    </section>
  );
};

export default Header;
