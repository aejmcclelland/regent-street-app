import { getCollectionContent } from "lib/payload";
import ChildrenCard from "@/components/ChildrenCard";

export default async function ChildrenPage() {
    // Fetch the groups from Payload CMS
    const childrenGroups = await getCollectionContent("children", 10); // Fetch up to 10 groups

    return (
        <div className="w-full">
            {/* Page Intro Section */}
            <section className="bg-primary text-white py-10 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Children’s Ministry</h1>
                    <p className="mt-4">
                        Our church is committed to helping children grow in faith, learn biblical truths, and build friendships.
                    </p>
                </div>
            </section>

            {/* Dynamic Cards Section */}
            <section className="py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {childrenGroups.length > 0 ? (
                        childrenGroups.map((group) => <ChildrenCard key={group.id} group={group} />)
                    ) : (
                        <p className="text-center text-gray-500">No children’s groups found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}