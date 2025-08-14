import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Using React Icons

const Heritage = () => {
  return (
    <section id="heritage" className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Flippin’ Good Times</h3>
          <p className="text-lg text-gray-400 font-semibold">
            From kicking a ball around the Midlands to flipping burgers side by side, we’ve swapped playground banter for grill-side banter—and we’re loving every minute.
          </p>
          <p className="text-lg text-gray-400 font-semibold mt-4">
            We nick flavours from all over the globe, stack ’em high, and serve ’em with a wink. Fresh buns, juicy patties, saucy combos—every bite’s a little adventure, right here on your plate.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-orange-500 text-white">
              <FaHeart className="text-2xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-[#333]">Mates’ Inspiration</h3>
          <p className="text-center text-gray-800 mt-2">
            From backyard BBQ experiments to late-night burger runs, our love for good grub (and each other’s bad ideas) sparked the flavours you’re biting into today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
