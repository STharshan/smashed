import React from 'react';

const Card = ({ icon, title, description, bgColor, iconColor, titleColor, descriptionColor }) => {
  return (
    <div
      className={`bg-${bgColor} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-semibold text-center ${titleColor}`}>{title}</h3>
      <p className={`text-center ${descriptionColor} mt-2`}>{description}</p>
    </div>
  );
};

export default Card;
