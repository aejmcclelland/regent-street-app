import { getCollectionContent } from "lib/payload";
import ChildrenCard from "@/components/ChildrenCard";
import Banner from "@/components/Banner";

export default async function ChildrenPage() {
    // Fetch the groups from Payload CMS
    const childrenGroups = await getCollectionContent("children", 10); // Fetch up to 10 groups

    console.log("Children Groups:", childrenGroups);

    return (
        <div className="w-full">
            {/* Banner */}
            <Banner
                publicId="https://res.cloudinary.com/dqeszgo28/image/upload/v1742659176/childrens_service_qbwnt3.jpg"
                alt="Children's Ministry"
                title="Childrens Ministry"
                textPosition="bottomLeft"
                fontColour="two"
            />

            {/* Dynamic Cards Section */}
            <section className="py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {childrenGroups.length > 0 ? (
                        childrenGroups.map((group) => {
                            console.log(group);
                            if (group.slug === "scouts" || group.slug === "guides") {
                                const GroupCard = require(`@/components/${group.slug.charAt(0).toUpperCase() + group.slug.slice(1)}GroupCard`).default;
                                return (
                                    <GroupCard
                                        key={group.id}
                                        group={{
                                            ...group.linkedPage?.value,
                                            image: group.image, // fallback or top-level image
                                        }}
                                    />
                                );
                            } else {
                                return <ChildrenCard key={group.id} group={group} />;
                            }
                        })
                    ) : (
                        <p className="text-center text-gray-500">No children’s groups found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}