"use client";

import Image from "next/image";

export default function Banner({ publicId, alt, title, textPosition = "center", fontColour = "one" }) {
    // Map text position to Tailwind classes
    const positionClasses = {
        center: "inset-0 flex items-center justify-center",
        bottomRight: "bottom-5 right-5 flex justify-end pr-5 pb-5",
        bottomLeft: "bottom-5 left-5 flex justify-start pl-5 pb-5",
        topRight: "top-5 right-5 flex justify-end pr-5 pt-5",
        topLeft: "top-5 left-5 flex justify-start pl-5 pt-5",
    };

    // Map font colors from DaisyUI theme
    const textColourClasses = {
        one: "text-accent",
        two: "text-primary",
        three: "text-secondary",
        four: "text-white",
    };

    return (
        <div className="relative w-full h-[400px]">
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Conditional next / Image */}
            {publicId ? (
                <Image
                    src={publicId.startsWith('http') ? publicId : `https://res.cloudinary.com/dqeszgo28/image/upload/c_fill,w_1600,h_800,g_auto,f_auto,q_auto/${publicId}`}
                    width={1600}
                    height={800}
                    alt={alt}
                    className="w-full h-full object-cover object-center"
                    priority
                />
            ) : (
                <div className="w-full h-full bg-gray-300" />
            )}

            {/* Title Overlay */}
            {title && (
                <div className={`absolute ${positionClasses[textPosition]} z-20`}>
                    <h1 className={`text-4xl sm:text-6xl md:text-7xl font-bold drop-shadow-lg ${textColourClasses[fontColour]}`}>
                        {title}
                    </h1>
                </div>
            )}
        </div>
    );
}