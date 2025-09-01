import React from "react";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";

const InfoSection = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="text-center text-white mb-5 text-2xl font-semibold">Ashby</div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hours */}
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300">
          <FiClock className="mx-auto text-4xl text-black mb-4" />
          <h3 className="text-xl font-semibold mb-2">Hours</h3>
          <p className="text-gray-900">Monday: 17:00 – 23:00</p>
          <p className="text-gray-900">Wednesday: 17:00 – 23:00</p>
          <p className="text-gray-900">Thursday: 17:00 – 23:00</p>
          <p className="text-gray-900">Friday: 17:00 – 23:00</p>
          <p className="text-gray-900">Saturday: 17:00 – 23:00</p>
          <p className="text-gray-900">Sunday: 17:00 – 23:00</p>
          <p className="text-gray-900">Tuesday: Closed</p>
        </div>

        {/* Location */}
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300">
          <FiMapPin className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-900">85a Market Street</p>
          <p className="text-gray-900">Ashby</p>
          <p className="text-gray-900">LE65 1AH</p>
          <FiPhone className="mx-auto text-4xl mb-2 mt-4" />
          <h3 className="text-xl font-semibold">01530 648708</h3>
        </div>
      </div>

      <div className="text-center mb-5 mt-10 text-2xl font-semibold text-white">Quorn</div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hours */}
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300">
          <FiClock className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Hours</h3>
          <p className="text-gray-900">Monday: 17:00 – 23:00</p>
          <p className="text-gray-900">Wednesday: 17:00 – 23:00</p>
          <p className="text-gray-900">Thursday: 17:00 – 23:00</p>
          <p className="text-gray-900">Friday: 17:00 – 23:00</p>
          <p className="text-gray-900">Saturday: 17:00 – 23:00</p>
          <p className="text-gray-900">Sunday: 17:00 – 23:00</p>
          <p className="text-gray-900">Tuesday: Closed</p>
        </div>

        {/* Location */}
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300">
          <FiMapPin className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-900">10b Leicester Road</p>
          <p className="text-gray-900">Quorn</p>
          <p className="text-gray-900">LE12 8ET</p>
          <FiPhone className="mx-auto text-4xl mb-2 mt-4" />
          <h3 className="text-xl font-semibold">01509 416655</h3>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
