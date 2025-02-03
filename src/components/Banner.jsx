"use client";

import { CldImage } from "next-cloudinary";

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
        <div className="relative w-full h-[300px]">
            {/* Full Black Overlay (Ensures it Covers Entire Banner) */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Cloudinary Image */}
            <CldImage
                src={publicId}
                width={1600}
                height={500}
                alt={alt}
                crop="fill"
                gravity="auto"
                className="w-full h-full object-cover"
            />

            {/* Title Overlay */}
            {title && (
                <div className={`absolute ${positionClasses[textPosition]} z-20`}>
                    <h1 className={`text-7xl sm:text-8xl font-bold drop-shadow-lg ${textColourClasses[fontColour]}`}>
                        {title}
                    </h1>
                </div>
            )}
        </div>
    );
}