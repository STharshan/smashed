import { Flame, Utensils } from 'lucide-react';
import React from 'react';
import { FaAward } from 'react-icons/fa'; // Importing icons from React Icons
import Card from './Card'; // Import the Card component

const expertiseData = [
  {
    icon: <FaAward className="text-3xl text-orange-400" />,
    title: "Hands-On from Bun to Bite",
    description:
      "We craft every burger ourselves-seasoning, smashing, and stacking-so you get nothing but fresh, mouthwatering goodness.",
  },
  {
    icon: <Utensils className="text-3xl text-orange-400" />,
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
    <section id="expertise" className="py-16 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Juiciest Burgers In Town</h2>
      <p className="text-xl text-center text-yellow-500 mb-12">
        What started as two friends sharing laughs over backyard BBQs is now a full-blown mission to serve the juiciest burgers in town.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            bgColor="yellow-500"
            iconColor="bg-white"
            titleColor="text-black"
            descriptionColor="text-gray-900"
          />
        ))}
      </div>
    </section>
  );
};

export default Expertise;
