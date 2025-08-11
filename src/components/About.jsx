import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white scroll-m-22">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">About Urban Spud</h2>
          <p className="mt-4 text-lg text-green-800 max-w-2xl mx-auto">
            Born from a passion for comfort food and urban culture, Urban Spud brings together the best of both worlds in a warm, welcoming atmosphere.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-green-900 mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Located on Market Street, Urban Spud started with a simple mission: to create the perfect loaded jacket potato experience. Our specialized kitchen equipment and carefully crafted menu have made us a beloved destination for comfort food lovers.
            </p>
            <p className="text-gray-700">
              From our signature loaded potatoes prepared in our custom ovens to our carefully curated selection of urban-inspired dishes, every item is made fresh to order. Our open kitchen concept lets you see the care and attention that goes into every dish we serve.
            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2">
            <img
              src="/image.png"
              alt="Urban Spud Interior"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
