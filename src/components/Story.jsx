import React from "react";

const Story = () => {
    return (
        <section id="story" className="py-16 px-6 scroll-m-25 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                    <div>
                        {/* Replace with your image URL */}
                        <img
                            src="/fire.png"  // Ensure this is correct path in the public folder
                            alt="Story Icon"
                            className="w-22 h-15"  // Adjust the width and height as needed
                        />
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold text-yellow-500 mb-4">Our Story</h2>

                {/* Description */}
                <p className="text-xl text-gray-400">
                    From growing up together in the Midlands to flipping our dream into reality—this is our story of mates, burgers, and bold flavor.
                </p>
            </div>
        </section>
    );
};

export default Story;
