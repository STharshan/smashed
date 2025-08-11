import React from "react";
import { Users, Utensils } from "lucide-react";
import { FaGlobe, FaHeart } from "react-icons/fa"; // Import the icons
import { SlLocationPin } from "react-icons/sl";

const journeyData = [
  {
    year: "1990s",
    title: "Humble Beginnings",
    description:
      "Arriving in Bolton as a student, working in a local pizza and pasta restaurant. The love for food began to bloom with every shift.",
    icon: <SlLocationPin className="text-xl"/>, // Use the corresponding icon
  },
  {
    year: "community",
    title: "Keeping the Flame Alive",
    description:
      "Starting from home, authentic BBQ became a favorite among friends, family, and a growing community of loyal customers.",
    icon: <FaHeart className="text-xl"/>, // Use the corresponding icon
  },
  {
    year: "8 Years",
    title: "Taking Ownership",
    description:
      "Hard work paid off—bought and ran that very restaurant for eight incredible years, learning every aspect of the business.",
    icon: <Utensils />, // Use the corresponding icon
  },
  {
    year: "Journey",
    title: "Return to Roots",
    description:
      "A short return to Africa rekindled the connection to heritage and traditional cooking methods that would later define our unique approach.",
    icon: <FaGlobe className="text-xl" />, // Use the corresponding icon
  },
//   {
//     year: "Search",
//     title: "Finding Home",
//     description:
//       "Four long years of searching for the perfect location. Patience and persistence finally led to our dream space.",
//     icon: <FaSearch />, // Use the corresponding icon
//   },
  // {
  //   year: "Today",
  //   title: "Six Years Strong",
  //   description:
  //     "Proud to call this place home, serving our community with authentic flavors and bringing people together through food.",
  //   icon: <Users />, // Use the corresponding icon
  // },
];

const Journey = () => {
  return (
    <section id="journey" className="bg-[#f5f5f5] py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-green-900">The Journey</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[#F26C22] text-white`}
              >
                {item.icon} {/* Display the React icon here */}
              </div>
              <span className="text-lg font-semibold ">{item.year}</span>
            </div>
            <h3 className="text-xl font-bold mt-4 text-green-700">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
