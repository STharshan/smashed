import React, { useState } from 'react';

const categories = [
  "Burger Special Meal",
  "Smashed Burgers",
  "Smashed Chicken Burgers",
  "Loaded Fries",
  "Sides",
  "Dips",
  "Premium Shakes",
  "Shakes",
  "Drinks",
];


const allItems = [
  // Burger Special Meal
  { title: "Munch Box", price: "£16.00", desc: "Your choice of Classic Smash or Fly Chick, Loaded Beef of Chick Fries, and any Shake", category: "Burger Special Meal", image: "/fishfry.jpeg" },

  // Smashed Burgers
  { title: "Classic Smash", price: "£6.00", desc: "Two SMASHED Angus beef patties topped with American cheese, lettuce, gherkins, and our house sauce in a seeded brioche bun.", category: "Smashed Burgers", image: "/classic.jpg" },
  { title: "Phat Stack", price: "£7.50", desc: "Two SMASHED Angus beef patties topped with a fried egg, hash brown, crispy fried onions, American cheese, lettuce, gherkins, and our house sauce in a seeded brioche bun.", category: "Smashed Burgers", image: "/phat.jpg" },
  { title: "Smashed it", price: "£6.50", desc: "Two SMASHED Angus beef patties topped with Flamin' Hot Cheetos, Jalapeños, American cheese, lettuce, gherkins, and our house sauce in a seeded brioche bun.", category: "Smashed Burgers", image: "/smashed.jpg" },

  // Smashed Chicken Burgers
  { title: "Fly Chick", price: "£6.00", desc: "Crispy fried chicken fillet topped with American cheese, lettuce, and our house sauce in a seeded brioche bun.", category: "Smashed Chicken Burgers", image: "/fly.jpg" },
  { title: "Mexcicano Chick", price: "£7.50", desc: "Crispy fried chicken fillet topped with coleslaw, hash brown, jalapeños, American cheese, lettuce, and our house sauce in a seeded brioche bun.", category: "Smashed Chicken Burgers", image: "/mexicano.jpg" },
  { title: "Dynamitei", price: "£6.50", desc: "Crispy fried chicken fillet coated in our dynamite sauce topped with American cheese and lettuce, in a seeded brioche bun.", category: "Smashed Chicken Burgers", image: "/dynamite.jpg" },

  // Loaded Fries
  { title: "Loaded Beef Fries", price: "£7.50", desc: "Fries topped with ground beef, cheese, jalapeños, caramelised onions, peppers, your choice of sauce, garnished with crispy fried onions.", category: "Loaded Fries", image: "/beef.jpg" },
  { title: "Loaded Chicken Fries", price: "£7.50", desc: "Fries topped with crispy fried chicken bites, cheese, jalapeños, caramelised onions, peppers, your choice of sauce, garnished with crispy fried onions.", category: "Loaded Fries", image: "/steak.jpg" },

  // Sides
  { title: "Fries", price: "£2.50", category: "Sides", image: "/fries.jpg" },
  { title: "Cheesy Fries", price: "£3.50", category: "Sides", image: "/fries.jpg" },
  { title: "Onion Rings", price: "£3.50", desc: "Crispy, deep fried breaded onion rings.", category: "Sides", image: "/fries.jpg" },
  { title: "Chilli Cheese Bites", price: "£3.50", desc: "Crispy, deep fried Chilli Cheese Bites", category: "Sides", image: "/fries.jpg" },
  { title: "Mozzarella Sticks", price: "£3.50", desc: "Crispy coast sticks of Mozzarella inside.", category: "Sides", image: "/fries.jpg" },
  { title: "Chicken Nuggets", price: "£3.50", desc: "Crispy coast sticks of Mozzarella inside.", category: "Sides", image: "/fries.jpg" },

  // Dips
  { title: "Garlic Mayo", price: "£0.75", category: "Dips", image: "/chicken.jpg" },
  { title: "Hot Chilli", price: "£0.75", category: "Dips", image: "/chicken.jpg" },
  { title: "Chilli", price: "£0.75", category: "Dips", image: "/chicken.jpg" },
  { title: "Algerian", price: "Sold out", category: "Dips", image: "/chicken.jpg" },
  { title: "Dynamite", price: "£0.75", category: "Dips", image: "/dynamivte.jpg" },
  { title: "Burger", price: "£0.75", category: "Dips", image: "/chicken.jpg" },
  { title: "BBQ", price: "£0.75", category: "Dips", image: "/chicken.jpg" },
  { title: "Ketchup", price: "£0.75", category: "Dips", image: "/chicken.jpg" },
  { title: "Mayo", price: "£0.75", category: "Dips", image: "/chicken.jpg" },

  // Premium Shakes
  { title: "Velvet Rouge", price: "£6.45", category: "Premium Shakes", image: "/lamb.jpg" },
  { title: "Bangin' Brownie", price: "£6.45", category: "Premium Shakes", image: "/lamb.jpg" },
  { title: "Cookie Monster", price: "£6.45", category: "Premium Shakes", image: "/lamb.jpg" },

  // Shakes
  { title: "Oreo", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Kinder Bueno", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Kinder White", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Ferrero Rocher", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Aero Mint", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Snickers", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Crunchie", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Terry's Orange", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Flake", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Maltesers", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Mars", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Biscoff", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Reese's", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "M&M", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Millions", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Skittles", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Jammie Dodgers", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Strawbeery", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Raspberry", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Mango", price: "£4.95", category: "Shakes", image: "/curry.jpg" },
  { title: "Vanilla", price: "£4.95", category: "Shakes", image: "/curry.jpg" },

  // Drinks
  { title: "Coke", price: "£1.50", category: "Drinks", image: "/drink.jpg" },
  { title: "Fanta Orange", price: "£1.50", category: "Drinks", image: "/drink.jpg" },
  { title: "Diet Coke", price: "£1.50", category: "Drinks", image: "/drink.jpg" },
  { title: "Fanta Lemon", price: "£1.50", category: "Drinks", image: "/drink.jpg" },
  { title: "Fanta Pineapple & Grapefruit", price: "£1.50", category: "Drinks", image: "/drink.jpg" },
  { title: "Fanta Fruit Twist", price: "£1.50", category: "Drinks", image: "/drink.jpg" },
  { title: "7up", price: "£1.50", category: "Drinks", image: "/drink.jpg" },
  { title: "Water", price: "£1.00", category: "Drinks", image: "/drink.jpg" },

];


const Menu = () => {
  const [selected, setSelected] = useState("Burger Special Meal");

  const filtered = selected === "All"
    ? allItems
    : allItems.filter((item) => item.category === selected);

  return (
    <section id="menu" className="w-full bg-black text-[#E5D9C2] py-16 px-6">
      {/* Title */}
      <div className="text-center mb-8 mt-18">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 text-white">Main Menu</h2>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-md font-medium text-sm transition duration-300 ease-in-out ${selected === cat
              ? "bg-yellow-700 text-white shadow-md"
              : "bg-yellow-500 text-white hover:bg-[#F26C22]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filtered.map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1A1A] rounded-lg border border-gray-300 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-yellow-500 hover:shadow-2xl"
          >
            <img
              src={item.image && item.image !== "" ? item.image : "/logo.png"}  // More explicit check for missing or empty image values
              alt={item.title}
              className="mx-auto w-[85%] md:h-80  mt-5 rounded-lg h-65 object-cover"
              onError={(e) => e.target.src = "/logo.png"}  // Fallback to logo.png on image load error
            />
            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
              <div className="mb-2">
                <h3 className="text-white">{item.desc}</h3>
              </div>
              <div className="mb-5">
                <span className="text-yellow-500 font-semibold block">
                  Price: {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Menu;