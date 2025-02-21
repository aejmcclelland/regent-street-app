import { getGlobalContent } from "lib/payload";
import Banner from '@/components/Banner';

export default async function WhatsOnPage() {
    const whatsOn = await getGlobalContent('whats-on');

    return (
        <div className="w-full">
            {/* ✅ Banner Section */}
            {whatsOn?.heroBanner && (
                <Banner
                    publicId={whatsOn.heroBanner.url}
                    alt="What's On"
                    title="What's On"
                    textPosition="bottomLeft"
                    fontColour="two"
                />
            )}

            <h1>What’s On</h1>
            <p>{whatsOn?.introText || "No content available"}</p>

            <ul>
                {/* ✅ Display linked content dynamically */}
                {whatsOn?.sundaysContent && (
                    <li><a href="/whats-on/sundays">{whatsOn.sundaysContent.title}</a></li>
                )}
                {whatsOn?.youthContent && (
                    <li><a href="/whats-on/youth">{whatsOn.youthContent.title}</a></li>
                )}
                {whatsOn?.kidsContent && (
                    <li><a href="/whats-on/kids">{whatsOn.kidsContent.title}</a></li>
                )}
            </ul>
        </div>
    );
}