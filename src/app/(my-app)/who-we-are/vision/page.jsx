import Banner from '../../../../components/Banner';

export default async function Vision() {
    return (
        <div className="w-full">
            {/* Banner Section with Dynamic Title */}
            <Banner
                publicId="regentStreetChurch/praise_sample.jpg"
                alt="Church Vision"
                title="Our Vision"
                textPosition="bottomRight" // ✅ Text in bottom right
                fontColour="three" // ✅ Text in secondary colour
            />

            {/* Vision Content Section */}
            <section className="bg-base-200 min-h-screen py-16 px-6">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-bold text-primary mb-8">
                        A Community Built on Faith & Fellowship
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Family, friendship, fellowship, and fun are at the heart of Regent Street.
                        We believe in creating a welcoming and caring community where everyone can grow in faith and friendship.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                        Our mission is to ensure that **every person feels welcome**, from the youngest to the oldest.
                        We provide opportunities for all to deepen their relationship with God through Jesus Christ.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed mt-6">
                        By supporting and encouraging one another, we seek to use our God-given gifts to **care, uplift, and serve**.
                        Through love, faith, and companionship, we invite you to walk this journey with us.
                    </p>

                    {/* Invitation Section */}
                    <div className="mt-10 p-6 bg-base-100 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-secondary mb-4">Join Us on This Journey</h2>
                        <p className="text-gray-700 text-lg">
                            As a community of God’s people, we extend an open invitation:
                            Come along, experience His love, and be a part of something greater.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}