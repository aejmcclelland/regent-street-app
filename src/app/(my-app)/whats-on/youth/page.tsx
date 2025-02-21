import Banner from "@components/Banner";
import { getCollectionContent } from "lib/payload";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

// Define Type for Youth Content
interface YouthItem {
    id: string;
    title?: string;
    description?: SerializedEditorState | null; 
}

export default async function Youth() {
    const youthContent = (await getCollectionContent("youth")) as YouthItem[];

    console.log("Fetched Youth Content:", JSON.stringify(youthContent, null, 2));

    return (
        <div className="w-full">
            {/* Banner */}
            <Banner
                publicId="regentStreetChurch/praise_sample.jpg"
                alt="Youth Ministry"
                title="Youth Ministry"
                textPosition="bottomLeft"
                fontColour="two"
            />
            {/* Content */}
            <section className="bg-base-200 py-10">
                <div className="container mx-auto px-4 space-y-10">
                    {youthContent.length > 0 ? (
                        youthContent.map((item) => (
                            <div key={item.id}>
                                <h2 className="text-4xl font-bold text-center text-primary mb-6">
                                    {item.title || "Youth Ministry"}
                                </h2>

                                <div className="text-lg text-gray-700 space-y-4">
                                    {item.description ? (
                                        <RichText data={item.description} />
                                    ) : (
                                        <p className="text-center text-gray-500">No content available</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No youth content available</p>
                    )}
                </div>
            </section>
        </div>
    );
}