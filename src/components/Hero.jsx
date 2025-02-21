"use client";
import { CldImage } from "next-cloudinary";
import dynamic from "next/dynamic";

const Carousel = dynamic(
    () => import("react-responsive-carousel").then((mod) => mod.Carousel),
    { ssr: false }
);

export default function Hero({ images }) {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            interval={5000} // 5 seconds per slide
        >
            {images.map((img) => (
                <div key={img.src} className="relative">
                    <CldImage
                        src={img.src}
                        width={1920}
                        height={600}
                        alt={img.alt}
                        crop="fill"
                        gravity="auto"
                        className="w-auto h-auto shadow-lg" // Fix aspect ratio
                    />
                    <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
                        {img.caption}
                    </p>
                </div>
            ))}
        </Carousel>
    );
}