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

    // Filter out unwanted groups
    const filteredGroups = childrenGroups.filter(
        (group) => ["sundaySchool", "firstFriends"].includes(group.slug)
    );

    return (
        <>
            {/* Banner Section */}
            <Banner
                publicId="https://res.cloudinary.com/dqeszgo28/image/upload/t_sundays/v1742673268/regentStreetChurch/sunday_school_nw4az0.png"
                alt="Children's Ministry"
                title="Children's Ministry"
                textPosition="bottomLeft"
                fontColour="two"
            />

            {/* Dynamic Cards Section */}
            <section className="py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredGroups.map((group) => {
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
                    })}

                    {filteredGroups.length === 0 && (
                        <p className="text-center text-gray-500">No children’s groups found.</p>
                    )}

                    {/* Add a new card for "Events" */}
                    <div className="bg-base-200 p-6 rounded-lg shadow hover:shadow-lg transition-all">
                        <h3 className="text-xl font-bold text-primary mb-2">Events</h3>
                        <p className="text-gray-700 mb-4">Holiday Bible Club and other children’s events.</p>
                        <a
                            href="/whats-on/children/events"
                            className="inline-block mt-2 text-accent hover:underline font-semibold"
                        >
                            View Events
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}