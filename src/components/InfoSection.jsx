import React from "react";
import { FiClock, FiMapPin, FiUsers } from "react-icons/fi";

const InfoSection = () => {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="text-center text-white mb-5 text-2xl font-semibold" >Ashby</div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hours */}
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white">
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
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white">
          <FiMapPin className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-900">85a Market Street</p>
          <p className="text-gray-900">Ashby</p>
          <p className="text-gray-900">LE65 1AH</p>
        </div>
      </div>

      <div className="text-center mb-5 mt-10 text-2xl font-semibold text-white" >Quorn</div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hours */}
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white">
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
        <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white">
          <FiMapPin className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-900">85a Market Street</p>
          <p className="text-gray-900">Ashby</p>
          <p className="text-gray-900">LE65 1AH</p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
