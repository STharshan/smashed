import React, { useState, useEffect } from "react";
import { Flame } from "lucide-react"; // Import the Lucide Flame icon

const Story = () => {
    const [flameBrightness, setFlameBrightness] = useState(1);

    // Animation for flame icon
    useEffect(() => {
        const interval = setInterval(() => {
            setFlameBrightness((prev) => (prev === 1 ? 0.7 : 1)); // Toggle brightness
        }, 1000); // Adjust brightness every second

        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <section id="story" className=" py-16 px-6 scroll-m-25">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <div className="relative mb-12">
                    {/* Dot Icon with animation */}
                    <div
                        className="absolute top-0 left-0 animate-bounce w-4 h-4 bg-red-500 rounded-full"
                        style={{
                            animation: "bounce 1.5s ease-in-out infinite",
                            position: "absolute",
                            top: "-32px", // Adjust to control the starting position
                            left: "calc(100% + 10px)", // Adjust to place it to the right
                        }}
                    />
                    {/* Flame Icon with animation */}
                    <div
                        className={`absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 animate-pulse`}
                        style={{ animationDuration: "1.8s", opacity: flameBrightness }}                    >                        <Flame className="w-15 h-15 text-orange-500" />
                    </div>

                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold text-green-900 mb-4">Our Story</h2>

                {/* Description */}
                <p className="text-xl text-gray-600">
                    From growing up together in the Midlands to flipping our dream into reality—this is our story of mates, burgers, and bold flavor.
                </p>
            </div>
        </section>
    );
};

export default Story;
