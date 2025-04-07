import Banner from "@components/Banner";
import Image from "next/image";
import { getCollectionContent } from "lib/payload"; //Import function to fetch team members

interface TeamMember {
    id: string;
    name: string;
    role?: string;
    bio?: any;
    image?: {
        cloudinaryUrl?: string;
        alt?: string;
        filename?: string;
        url?: string;
    };
    banner?: {
        cloudinaryUrl?: string;
        alt?: string;
    };
}

export default async function OurTeam() {
    const teamMembers = (await getCollectionContent("team", 10)) as TeamMember[]; //Fetch up to 10 team members

    return (
        <div className="w-full">
            {/* Banner Section */}
            <Banner
                publicId={teamMembers[0]?.banner?.cloudinaryUrl || "regentStreetChurch/church-banner.png"}
                alt={teamMembers[0]?.banner?.alt || "Who's Who?"}
                title="Who's Who?"
                textPosition="bottomRight"
                fontColour="one"
            />

            {/* Team Members Section */}
            <section className="bg-base-200 py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers?.length > 0 ? (
                            teamMembers.map((member) => (
                                <div key={member.id} className="bg-base-100 p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                                    {/* Profile Image - Rectangular with Rounded Corners */}
                                    <div className="w-40 h-40 overflow-hidden rounded-full flex justify-center items-center bg-gray-200">
                                        <Image
                                            src={
                                                member.image?.cloudinaryUrl || // Prefer Cloudinary URL if available
                                                (member.image?.url ? `/media/${member.image?.filename}` : null) || // Fallback to local upload
                                                "/images/placeholder-male.jpg" // Final fallback
                                            }
                                            alt={member.image?.alt || member.name} // Use alt if provided
                                            width={160}
                                            height={208}
                                            className="object-cover w-full h-full rounded-full"
                                        />
                                    </div>

                                    {/* Name and Role */}
                                    <h2 className="text-lg font-bold text-primary mt-4">{member.name}</h2>
                                    <p className="text-secondary text-sm font-semibold">{member.role}</p>

                                    {/* Bio (Properly formatted Rich Text) */}
                                    <p className="text-base-content mt-3">
                                        {Array.isArray(member.bio?.root?.children)
                                            ? member.bio.root.children
                                                  .map((block: any) =>
                                                      Array.isArray(block.children)
                                                          ? block.children
                                                                .map((child: any) =>
                                                                    Array.isArray(child.children)
                                                                        ? child.children.map((textNode: any) => textNode.text).join(" ")
                                                                        : child.text
                                                                )
                                                                .join(" ")
                                                          : ""
                                                  )
                                                  .join(" ")
                                            : "No bio available"}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No team members found.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}