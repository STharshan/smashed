import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Using React Icons
import Card from './Card'; // Import the Card component

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
        <div className="md:w-1/3">
          <Card
            icon={<FaHeart className="text-2xl" />}
            title="Mates’ Inspiration"
            description="From backyard BBQ experiments to late-night burger runs, our love for good grub (and each other’s bad ideas) sparked the flavours you’re biting into today."
            bgColor="yellow-500"
            iconColor="bg-orange-500 text-white"
            titleColor="text-black"
            descriptionColor="text-gray-900"
          />
        </div>
      </div>
    </section>
  );
};

export default Heritage;
