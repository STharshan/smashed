import { useEffect, useState } from "react";

export function StorySection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate((prev) => !prev);
        }, 2000); // Change every 2 seconds for smooth transition

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section className="flex flex-col items-center justify-center px-6 bg-black text-white text-center">
            <div
                className={`${animate ? "animate-pulse" : ""
                    } shadow-xs transition-all duration-800 mt-10`}
            >
                {/* Replace with your image URL */}
                <img
                    src="/fire.png"  // Update this with your image path
                    alt="Fire"
                    className="w-18 h-12" // Adjust the image size as needed
                />
            </div>
            <h1 className="text-4xl font-bold mb-2 mt-2">Welcome to Our <span className="text-yellow-500">Grill</span> </h1>
            <p className="text-lg max-w-2xl mx-auto font-semibold text-gray-400">
                Every burger has a tale. Every sizzle carries our journey. Every bite brings mates together. This is more than food-it’s friendship in a bun.
            </p>
        </section>
    );
}
