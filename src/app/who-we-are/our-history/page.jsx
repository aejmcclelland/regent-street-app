import Banner from "@/components/Banner";

export default function OurHistory() {
    return (
        <div className="w-full">
            {/* Banner Section */}
            <Banner
                publicId="regentStreetChurch/watters-memorial.jpg"
                alt="Church History"
                title="Our History"
                textPosition="bottomLeft" // ✅ Text in bottom left
                fontColour="two" // ✅ Text in accent color
            />
            {/* History Section */}
            <section className="bg-base-200 py-16 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-primary mb-8">
                        A Legacy of Worship & Community
                    </h2>

                    {/* Main Text Section */}
                    <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                        <p>
                            Regent Street was built and developed in the early part of the 19th Century as the new route for horse-drawn carriages and wagons,
                            traveling from Belfast through Newtownards to the new cross-channel service from Donaghadee to Portpatrick.
                        </p>

                        <p>
                            Designed on a grand scale, the street featured wide roads, impressive buildings, and large homes for the wealthiest inhabitants.
                            In 1834, a group of local Presbyterians formed a new congregation and chose a site to build a substantial church.
                        </p>

                        <p>
                            This church has served as a continuous place of worship for generations, sharing God's Good News to this day.
                        </p>
                    </div>

                    {/* Timeline / Key Events */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Key Milestones</h3>

                        <div className="space-y-8">
                            <div className="relative pl-8 border-l-4 border-primary">
                                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                                <h4 className="text-xl font-bold text-primary">1834 - Church Founded</h4>
                                <p className="text-gray-600">A group of Presbyterians in Newtownards established the church.</p>
                            </div>

                            <div className="relative pl-8 border-l-4 border-primary">
                                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                                <h4 className="text-xl font-bold text-primary">1850 - First Expansion</h4>
                                <p className="text-gray-600">Due to growth, additional seating was added.</p>
                            </div>

                            <div className="relative pl-8 border-l-4 border-primary">
                                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                                <h4 className="text-xl font-bold text-primary">1900 - New Facilities</h4>
                                <p className="text-gray-600">The church hall was built for community activities.</p>
                            </div>

                            <div className="relative pl-8 border-l-4 border-primary">
                                <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                                <h4 className="text-xl font-bold text-primary">Present - Still Serving</h4>
                                <p className="text-gray-600">The church continues to be a place of worship and outreach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}