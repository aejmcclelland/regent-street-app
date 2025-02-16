import Banner from "@components/Banner";
import { getCollectionContent } from "lib/payload";

// ✅ Function to recursively process Lexical nodes and return JSX
const renderLexicalContent = (node, key) => {
    if (!node) return null;

    switch (node.type) {
        case "paragraph":
            return (
                <p key={key} className="mb-4">
                    {node.children?.map((child, i) => renderLexicalContent(child, i))}
                </p>
            );

        case "text":
            return node.format === 1 ? <strong key={key}>{node.text}</strong> : node.text;

        case "list":
            return node.listType === "bullet" ? (
                <ul key={key} className="list-disc list-inside mb-4">
                    {node.children?.map((child, i) => renderLexicalContent(child, i))}
                </ul>
            ) : (
                <ol key={key} className="list-decimal list-inside mb-4">
                    {node.children?.map((child, i) => renderLexicalContent(child, i))}
                </ol>
            );

        case "listitem":
            return <li key={key}>{node.children?.map((child, i) => renderLexicalContent(child, i))}</li>;

        case "quote":
            return (
                <blockquote key={key} className="border-l-4 border-gray-500 pl-4 italic text-gray-700">
                    {node.children?.map((child, i) => renderLexicalContent(child, i))}
                </blockquote>
            );

        default:
            return node.children?.map((child, i) => renderLexicalContent(child, i));
    }
};

export default async function Sundays() {
    const sundaysContent = await getCollectionContent('sundays');

    return (
        <div className="w-full">
            {/* ✅ Banner Section */}
            <Banner
                publicId="regentStreetChurch/praise_sample.jpg"
                alt="Sunday Services"
                title={sundaysContent?.title || "Sunday Services"}
                textPosition="bottomLeft"
                fontColour="two"
            />

            {/* ✅ Content Section */}
            <section className="bg-base-200 py-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-primary mb-6">
                        {sundaysContent?.title || "Sunday Services"}
                    </h2>

                    {/* ✅ Render Formatted Content */}
                    <div className="text-lg text-gray-700 space-y-4">
                        {sundaysContent?.description?.root?.children?.length > 0 ? (
                            sundaysContent.description.root.children.map((child, index) =>
                                renderLexicalContent(child, index)
                            )
                        ) : (
                            <p>No content available</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}