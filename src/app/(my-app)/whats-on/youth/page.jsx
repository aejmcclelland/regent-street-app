import Banner from "@components/Banner";
import { getCollectionContent } from "lib/payload";

export async function getYouthContent() {
    // ✅ Fetch the content for the Youth page
    const youthContent = await getCollectionContent("youth");
    return youthContent;
}

// ✅ Function to extract plain text from Lexical JSON content
function extractTextFromLexical(content) {
    if (!content || !content.root || !content.root.children) return "No content available";

    // ✅ Extract text from Lexical richText object
    return content.root.children
        .map(node => node.children?.map(child => child.text).join(" ") || "")
        .join("\n");
}

export default async function YouthPage() {
    const youthContent = await getYouthContent(); // ✅ Fetch content

    return (
        <div className="w-full">
            {/* Banner Section */}
            <Banner
                publicId="regentStreetChurch/praise_sample.jpg"
                alt="Youth Ministry"
                title="Youth Ministry"
                textPosition="bottomLeft"
                fontColour="two"
            />

            {/* Content Section */}
            <section className="bg-base-200 py-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-primary mb-6">
                        {youthContent?.title || "Youth Ministry"}
                    </h2>
                    <p className="text-lg text-gray-700">
                        {extractTextFromLexical(youthContent?.content)}
                    </p>
                </div>
            </section>
        </div>
    );
}


