'use client';

const Hero = ({ images = [] }) => {
    return (
        <div className="relative z-0">
            <div className="carousel w-full">
                {images.map((image, index) => (
                    <div key={index} id={`slide${index}`} className="carousel-item relative w-full">
                        <img src={image.src} alt={image.alt} className="w-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 bg-black text-white p-4 text-center">
                            <h2 className="text-xl font-bold">{image.caption}</h2>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${index === 0 ? images.length - 1 : index - 1}`} className="btn btn-circle">
                                ❮
                            </a>
                            <a href={`#slide${(index + 1) % images.length}`} className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;