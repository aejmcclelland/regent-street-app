import Banner from "@components/Banner";
import Image from "next/image";
import { getCollectionContent } from "lib/payload"; // ✅ Import function to fetch team members

export default async function OurTeam() {
    const teamMembers = await getCollectionContent("team", 10); // ✅ Fetch up to 10 team members

    return (
        <div className="w-full">
            {/* ✅ Banner Section */}
            <Banner
                publicId="regentStreetChurch/church-banner.png"
                alt="Who's Who?"
                title="Who's Who?"
                textPosition="bottomRight"
                fontColour="one"
            />

            {/* ✅ Team Members Section */}
            <section className="bg-base-200 py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers?.map((member, index) => (
                            <div key={index} className="bg-base-100 p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                                {/* Profile Image - Rectangular with Rounded Corners */}
                                <div className="w-40 h-52 overflow-hidden rounded-xl flex justify-center items-center bg-gray-200">
                                    <Image
                                        src={member.image?.imageUrl || "/images/placeholder-male.jpg"} // ✅ Default image fallback
                                        alt={member.image?.alt || member.name} // ✅ Accessible alt text
                                        width={160}
                                        height={200}
                                        className="object-cover w-full h-full rounded-xl"
                                    />
                                </div>

                                {/* Name and Role (No Overlapping) */}
                                <h2 className="text-lg font-bold text-primary mt-4">{member.name}</h2>
                                <p className="text-secondary text-sm font-semibold">{member.role}</p>

                                {/* Bio (Properly formatted Rich Text) */}
                                <p className="text-base-content mt-3">
                                    {member.bio?.root?.children?.map((block, index) =>
                                        block.children?.map((textNode) => textNode.text).join(" ")
                                    ).join(" ") || "No bio available"}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}