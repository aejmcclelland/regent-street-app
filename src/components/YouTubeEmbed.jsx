"use client";

//https://www.youtube.com/watch?v=NoIfLsTfPH0

export default function YouTubeEmbed({ videoId }) {
    return (
        <section className="bg-gray-900 py-12 px-6 text-white"> {/* Section Background */}
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Latest Service</h2>

                {/* Centered YouTube Video */}
                {sunday.youtubeVideoId && (
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-3xl h-[250px] md:h-[300px] lg:h-[350px]">
                            <iframe
                                className="w-full h-full rounded-lg shadow-lg"
                                src={`https://www.youtube.com/embed/${sunday.youtubeVideoId}`}
                                title="Sunday Service"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}