import React from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import InfoCard from "./InfoCard";

const InfoSection = () => {
  const ashbyDetails = [
    {
      title: "Hours",
      icon: <FiClock />,
      details: [
        "Monday: 17:00 – 23:00",
        "Wednesday: 17:00 – 23:00",
        "Thursday: 17:00 – 23:00",
        "Friday: 17:00 – 23:00",
        "Saturday: 17:00 – 23:00",
        "Sunday: 17:00 – 23:00",
        "Tuesday: Closed"
      ]
    },
    {
      title: "Location",
      icon: <FiMapPin />,
      details: ["85a Market Street", "Ashby", "LE65 1AH"],
      phoneNumber: "01530 648708"
    }
  ];

  const quornDetails = [
    {
      title: "Hours",
      icon: <FiClock />,
      details: [
        "Monday: 17:00 – 23:00",
        "Wednesday: 17:00 – 23:00",
        "Thursday: 17:00 – 23:00",
        "Friday: 17:00 – 23:00",
        "Saturday: 17:00 – 23:00",
        "Sunday: 17:00 – 23:00",
        "Tuesday: Closed"
      ]
    },
    {
      title: "Location",
      icon: <FiMapPin />,
      details: ["10b Leicester Road", "Quorn", "LE12 8ET"],
      phoneNumber: "01509 416655"
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="text-center text-white mb-5 text-2xl font-semibold">Ashby</div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {ashbyDetails.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>

      <div className="text-center mb-5 mt-10 text-2xl font-semibold text-white">Quorn</div>
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {quornDetails.map((card, index) => (
          <InfoCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
