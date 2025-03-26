"use client";

import YouTubeEmbed from "./YouTubeEmbed";
import LatestEvents from "./LatestEvents";
import FeaturedContent from "./FeaturedContent";

export default function Sundays() {
    return (
        <section className="bg-base-200 py-16 px-6 text-center text-white">
            <div className="container mx-auto max-w-4xl">
                {/* Title */}
                <h2 className="text-4xl font-poppins-700 text-primary-content mb-6">Sundays are the best day of the week! Let’s spend them together.</h2>

                {/* Welcome Message */}
                <p className="text-lg font-poppins text-primary-content leading-relaxed mb-8">
                    Whether you're new to Regent Street or just curious about our worship, we invite you to join us for our Sunday services.
                    Experience uplifting worship, biblical teaching, and a welcoming community. If you can't attend in person, watch live or catch up anytime on our YouTube channel.
                </p>

                {/* YouTube Embed */}
                <YouTubeEmbed videoId="P0cZXkVbMbw" />

                {/* Latest Events Section */}
                <LatestEvents />

                {/* Featured Content Section */}
                <FeaturedContent />

                {/* Link to YouTube Channel */}
                <div className="mt-8">
                    <a
                        href="https://www.youtube.com/@regentstreetpci9220"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-primary-focus transition"
                    >
                        Watch More on YouTube
                    </a>
                </div>
            </div>
        </section>
    );
}

