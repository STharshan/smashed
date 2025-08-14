import { Flame, Utensils } from 'lucide-react';
import React from 'react';
import { FaAward } from 'react-icons/fa'; // Importing icons from React Icons

const expertiseData = [
  {
    icon: <FaAward className="text-3xl text-orange-400" />,
    title: "Hands-On from Bun to Bite",
    description:
      "We craft every burger ourselves-seasoning, smashing, and stacking-so you get nothing but fresh, mouthwatering goodness.",
  },
  {
    icon: <Utensils  className="text-3xl text-orange-400" />,
    title: "Years in the Making",
    description:
      "From teenage grill experiments to perfecting patties on the road, our journey’s been fuelled by curiosity, flavour, and a lot of taste-testing.",
  },
  {
    icon: <Flame className="w-7 h-7 text-orange-400" />,
    title: "Smashed with Soul",
    description:
      "For us, “smashed” means more than a cooking style-it’s about bringing mates together over flame, flavour, and one seriously good burger.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className=" py-16 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Burgers Born from Mateship</h2>
      <p className="text-xl text-center text-yellow-500 mb-12">
        What started as two friends sharing laughs over backyard BBQs is now a full-blown mission to serve the juiciest burgers in town.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-3 rounded-full">{item.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-center text-black">{item.title}</h3>
            <p className="text-center text-gray-900 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
