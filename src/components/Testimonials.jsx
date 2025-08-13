import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

// Testimonials data
const testimonials = [
  {
    name: "William",
    text: `absolutely best burger around 100% ordering again`,
  },
  {
    name: "Anastasia",
    text: `tasty food, good portions and came on time , thanks`,
  },
  {
    name: "Neil",
    text: `Always consistent with quality`,
  },
  {
    name: "Laeh",
    text: `first time ordering will definitely be returning it was so mouth watering`,
  },
  {
    name: "Andrew",
    text: `Great food and love the milkshakes.Great food, and they're very customer focused, cant complain about a thing.`,
  },
  {
    name: "Darren",
    text: `Absolutely friendly staff and lovely food very recommended 👍🏻😃`,
  },
  {
    name: "Demi",
    text: `One of the best smashed burgers I’ve had. Perfectly crispy edges, juicy in the middle, and packed with flavor. The toppings are simple but spot-on, and the bun holds it all together without getting soggy. 10/10 will be reordering!`,
  },
  {
    name: "Glen",
    text: `Tasty food, quick delivery. Would 100% use again`,
  },
  {
    name: "Julia",
    text: `Best burgers around! Super flavourful and definitely not skimpy on the toppings! Mozzarella sticks are to die for as well! Would recommend`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6">What Our Customers Say</h2>
        <p className="text-gray-700 mb-12">Don't just take our word for it – hear from our satisfied customers</p>

        {/* Scrollable Testimonials Section */}
        <div className="overflow-hidden">
          <div
            className="flex space-x-6 animate-scroll"
            style={{
              animationDuration: `${testimonials.length * 4}s`,
              animationTimingFunction: "linear",
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-[300px] px-6 py-4 border border-green-200 rounded-lg shadow-md hover:shadow-lg transition bg-white"
              >
                <div className="flex ml-23 gap-3 mb-2">
                  <div>
                    <h4 className="text-green-900 text-xl mb-2 font-semibold">{t.name}</h4>
                    <div className="flex text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;