import React from "react";
import { FiClock, FiMapPin, FiUsers } from "react-icons/fi";

const InfoSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hours */}
        <div className="border rounded-lg p-6 text-center shadow-sm">
          <FiClock className="mx-auto text-4xl text-green-800 mb-4" />
          <h3 className="text-xl font-semibold text-green-900 mb-2">Hours</h3>
          <p className="text-gray-700">Mon–Thu: 11am – 10pm</p>
          <p className="text-gray-700">Fri–Sat: 11am – 11pm</p>
          <p className="text-gray-700">Sunday: 12pm – 9pm</p>
        </div>

        {/* Location */}
        <div className="border rounded-lg p-6 text-center shadow-sm">
          <FiMapPin className="mx-auto text-4xl text-green-800 mb-4" />
          <h3 className="text-xl font-semibold text-green-900 mb-2">Location</h3>
          <p className="text-gray-700">421 St Saviours Rd,</p>
          <p className="text-gray-700">Leicester LE5 4HH</p>
        </div>

        {/* Capacity */}
        <div className="border rounded-lg p-6 text-center shadow-sm">
          <FiUsers className="mx-auto text-4xl text-green-800 mb-4" />
          <h3 className="text-xl font-semibold text-green-900 mb-2">Capacity</h3>
          <p className="text-gray-700">Indoor: 80 seats</p>
          <p className="text-gray-700">Outdoor: 40 seats</p>
          <p className="text-gray-700">Private dining available</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
