import { Flame, Utensils } from 'lucide-react';
import React from 'react';
import { FaAward } from 'react-icons/fa'; // Importing icons from React Icons

const expertiseData = [
  {
    icon: <FaAward className="text-3xl text-orange-400" />,
    title: "Personal Inspection",
    description:
      "We personally inspect every cut of meat before it makes its way to the grill, ensuring only the finest quality reaches your plate.",
  },
  {
    icon: <Utensils  className="text-3xl text-orange-400" />,
    title: "Lifelong Experience",
    description:
      "With butchery experience from age 12 and a background in hunting and preparing meat in Africa, our founder brings unmatched understanding.",
  },
  {
    icon: <Flame className="w-7 h-7 text-orange-400" />,
    title: "Authentic Braai",
    description:
      "'Braai' means 'to cook meat over an open fire' in Southern Africa—bringing people together through flame, flavor, and unforgettable food.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className=" py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#333]">Unmatched Expertise</h2>
      <p className="text-xl text-center text-gray-600 mb-12">
        Quality isn't just a promise—it's a way of life shaped by decades of experience.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full">{item.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-center text-green-700">{item.title}</h3>
            <p className="text-center text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
