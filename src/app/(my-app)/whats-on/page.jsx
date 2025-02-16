import { getGlobalContent } from "lib/payload";
import Banner from "@components/Banner";

export default async function WhatsOnPage() {
    const whatsOn = await getGlobalContent('whats-on');

    return (
        <div className="w-full">
            {/* Banner Section */}
            <Banner
                publicId="regentStreetChurch/praise_sample.jpg"
                alt="What's On"
                title="What's On"
                textPosition="bottomLeft"
                fontColour="two"
            />
            <h1>What’s On</h1>
            <p>{whatsOn?.introText || "No content available"}</p>

            <ul>
                <li><a href="/whats-on/sundays">Sundays</a></li>
                <li><a href="/whats-on/youth">Youth</a></li>
                <li><a href="/whats-on/kids">Kids</a></li>
            </ul>
        </div>
    );
}