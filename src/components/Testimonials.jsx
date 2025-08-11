import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Maggie Taylor",
    initial: "M",
    text: `"The Baked potatoes were delicious and portions very generous. Fantastic for a quick lunch, will definitely go again!"`,
  },
  {
    name: "R K",
    initial: "R",
    text: `"Really tasty and great portion size! Value for money and love the combos! Will definitely be a regular for us as a family going forwards."`,
  },
  {
    name: "Michael Meyerstein",
    initial: "M",
    text: `"Great food at reasonable prices, good portion sizes and the staff are friendly. I would imagine as they find their feet the place will only get better!"`,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900">What Our Customers Say</h2>
        <p className="text-gray-700 mt-2 mb-10">
          Don&apos;t just take our word for it – hear from our satisfied customers
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-100 rounded-lg p-6 text-left shadow-sm"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-800 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {t.initial}
                </div>
                <div>
                  <h4 className="text-green-900 font-semibold">{t.name}</h4>
                  <div className="flex text-yellow-500 text-sm">
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
    </section>
  );
};

export default Testimonials;
