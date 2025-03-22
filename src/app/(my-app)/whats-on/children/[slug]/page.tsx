import { resolveLinkedPage } from "@/lib/resolveLinkedPage";
import { RichText } from "@/components/RichText";
import Image from "next/image";
import Link from "next/link";

export default async function ChildrenGroupPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    if (!slug) {
        return <p className="text-center text-gray-500">Invalid request.</p>;
    }

    const displayData = await resolveLinkedPage({
        primaryCollection: "children",
        slug,
    });

    if (!displayData) {
        return <p className="text-center text-gray-500">Group not found.</p>;
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col md:flex-row gap-6">
                <figure className="w-full sm:w-1/3">
                    <Image
                        src={displayData.image?.cloudinaryUrl || "/images/placeholder.jpg"}
                      alt={displayData.image?.alt || displayData.name || "Children's ministry image"}
                        width={350}
                        height={300}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </figure>

                <div className="w-full md:w-2/3">
                    <h1 className="text-3xl font-bold text-primary">{displayData.name}</h1>

                    <div className="mt-4 text-gray-600">
                        <RichText data={displayData.description} />
                    </div>
                </div>
            </div>

            <Link href="/whats-on/children" className="btn btn-outline btn-sm mt-6">
                ← Back to All Children’s Ministry
            </Link>
        </div>
    );
}