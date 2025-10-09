import React from "react";
import { Users, Utensils } from "lucide-react";
import { FaGlobe, FaHeart } from "react-icons/fa"; // Import the icons
import { SlLocationPin } from "react-icons/sl";

const journeyData = [
  {
    year: "Midlands",
    title: "Friends & Family",
    description:
      "Built by lifelong mates with a love for bringing people together over great food.",
    icon: <SlLocationPin className="text-xl"/>, // Use the corresponding icon
  },
  {
    year: "community",
    title: "Passion for Food",
    description:
      "Every burger is crafted with care, flavour, and a dash of obsession.",
    icon: <FaHeart className="text-xl"/>, // Use the corresponding icon
  },
  {
    year: "Taste",
    title: "World of Inspiration",
    description:
      "Global flavours, reimagined and served fresh to your doorstep.",
    icon: <Utensils />, // Use the corresponding icon
  },
  {
    year: "Journey",
    title: "Always Learning",
    description:
      "We never stop exploring, tasting, and improving what we do.",
    icon: <FaGlobe className="text-xl" />, // Use the corresponding icon
  },
];

const Journey = () => {
  return (
    <section id="journey" className="bg-black py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">The Journey</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-500 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 hover:z-10 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-black text-white`}
              >
                {item.icon} {/* Display the React icon here */}
              </div>
              <span className="text-lg font-semibold ">{item.year}</span>
            </div>
            <h3 className="text-xl font-bold mt-4 text-white">{item.title}</h3>
            <p className="text-gray-900 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
