import React from "react";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";

const InfoCard = ({ icon, title, details, phoneNumber }) => {
  return (
    <div className="border-2 rounded-lg p-6 text-center shadow-sm bg-yellow-500 border-white hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300">
      {/* Centering the icon */}
      {icon && (
        <div className="flex justify-center items-center mb-4">
          <div className="text-4xl">{icon}</div>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-900">
          {detail}
        </p>
      ))}
      {phoneNumber && (
        <>
          <FiPhone className="mx-auto text-4xl mb-2 mt-4" />
          <h3 className="text-xl font-semibold">{phoneNumber}</h3>
        </>
      )}
    </div>
  );
};

export default InfoCard;
