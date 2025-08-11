import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Using React Icons

const Heritage = () => {
  return (
    <section id="heritage" className="bg-gradient-to-r to-green-700 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold text-green-900 mb-4">Our Heritage</h2>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Flavors of Two Worlds</h3>
          <p className="text-lg text-gray-700">
            Rooted in the vibrant flavors of Zambia and India, our BBQ and grilled meats are a celebration of heritage, tradition, and taste.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Inspired by a mother's love for cooking—her sweet treats and signature biryani—every dish here is crafted with care, quality, and flavor at its heart.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-orange-500 text-white">
              <FaHeart className="text-2xl" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center text-[#333]">Mother's Inspiration</h3>
          <p className="text-center text-gray-600 mt-2">
            Sweet treats, signature biryani, and endless love for cooking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
