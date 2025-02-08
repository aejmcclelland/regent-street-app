"use client";
import { CldImage } from "next-cloudinary";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles

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
                        src={img.src} // Cloudinary Public ID
                        width="800"
                        height="250"
                        alt={img.alt}
                        crop="fill"
                        gravity="auto"
                        className="shadow-lg"
                    />
                    <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
                        {img.caption}
                    </p>
                </div>
            ))}
        </Carousel>
    );
};