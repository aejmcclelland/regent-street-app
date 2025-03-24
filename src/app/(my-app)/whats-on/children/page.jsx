import { getCollectionContent } from "lib/payload";
import Banner from "@/components/Banner";
import { groupCardComponents } from "@/components/groupCardComponents";

function extractPlainTextFromLexical(description) {
    if (!description || typeof description !== "object" || !Array.isArray(description.root?.children)) return "";

    return description.root.children
        .map((child) => child.text || (child.children ? child.children.map((n) => n.text).join(" ") : ""))
        .join(" ")
        .trim();
}

export default async function ChildrenPage() {
    // Fetch the groups from Payload CMS
    const childrenGroups = await getCollectionContent("children", 10, { sort: "positionOrder" }); // Fetch up to 10 groups

    return (
        <div className="w-full">
            {/* Banner */}
            <Banner
                publicId="https://res.cloudinary.com/dqeszgo28/image/upload/v1742659176/childrens_service_qbwnt3.jpg"
                alt="Children's Ministry"
                title="Children's Ministry"
                textPosition="bottomLeft"
                fontColour="two"
            />

            {/* Dynamic Cards Section */}
            <section className="py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {childrenGroups.length > 0 ? (
                        childrenGroups.map((group) => {
                            const Component =
                                groupCardComponents[group.slug] || groupCardComponents.default;

                            return (
                                <Component
                                    key={group.id}
                                    group={{
                                        name: group.name,
                                        image: group.image,
                                        slug: group.slug,
                                        subgroups: group.linkedPage?.value?.subgroups || [],
                                        description:
                                            typeof group.description === "object"
                                                ? extractPlainTextFromLexical(group.description)
                                                : group.description,
                                    }}
                                />
                            );
                        })
                    ) : (
                        <p className="text-center text-gray-500">No children’s groups found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}