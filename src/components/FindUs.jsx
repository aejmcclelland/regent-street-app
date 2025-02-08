"use client";

export default function FindUs() {
    return (
        <section className="bg-base-100 py-12 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Column - Church Description */}
                <div>
                    <h2 className="text-2xl font-bold text-primary">Find Us</h2>
                    <p className="text-gray-700 mt-4">
                        Regent Street Presbyterian Church is situated on Regent Street in Newtownards.
                        Car parking is available at the rear of the church building – drive in through the gates and proceed down the right had side.
                    </p>
                </div>

                {/* Right Column - Google Map */}
                <div className="flex justify-center w-full">
                    <div className="inline-block w-fit">
                        <iframe
                            className="w-[360px] h-[200px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px]"
                            loading="lazy"
                            title="Google Map"
                            style={{ border: 0 }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1350.85671993108!2d-5.701519042355563!3d54.593903223012326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486174f02f1211bd%3A0x148591bf2270e44!2s48a%20Regent%20St%2C%20Newtownards%20BT23%204LP!5e0!3m2!1sen!2suk!4v1738420686810!5m2!1sen!2suk"  ></iframe>
                    </div>
                </div>
            </div>
        </section >
    );
};
