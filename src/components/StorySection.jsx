import { useEffect, useState } from "react";
import { Flame } from "lucide-react"; // Import flame icon

export function StorySection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate((prev) => !prev);
        }, 2000); // Change every 2 seconds for smooth transition

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section className="flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-r from-green-700 via-green-900 to-black text-white text-center">
            <div
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${animate ? "animate-pulse" : ""
                    } bg-[#F26C22] shadow-xs transition-all duration-500`}
            >
                <Flame color="white" size={70} />
            </div>
            <h1 className="text-4xl font-bold mb-2">Welcome to Our <span className="text-[#F26C22]">Grill</span> </h1>
            <p className="text-lg max-w-2xl mx-auto">
                Every burger has a tale. Every sizzle carries our journey. Every bite brings mates together. This is more than food-it’s friendship in a bun.
            </p>
        </section>
    );
}
