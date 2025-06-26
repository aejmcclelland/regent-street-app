import Banner from "@/components/Banner";

export default function TheLink() {


    return (
        <div>
            <Banner
                publicId="regentStreetChurch/church-banner.png"
                alt="The Link"
                title="The Link"
                textPosition="topLeft"
                fontColour="two"
            />
            <div className="container m-4 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <p className="text-3xl font-bold">The Link</p>


                </div>
            </ div>
        </div>
    );
}