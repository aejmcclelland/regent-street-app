import Banner from "@/components/Banner";
import Image from "next/image";

const teamMembers = [
    {
        name: "Rev Ann Tolland",
        role: "Minister",
        image: "/images/rev-a-tolland.jpg",
        bio: "Ann has been leading our congregation for over 2 years with a heart for ministry and community outreach."
    },
    {
        name: "Ian MacDonald",
        role: "Clerk of Session",
        image: "/images/ian-macdonald.jpg",
        bio: "Ian works with the minister and session to ensure the church runs smoothly."
    },
    {
        name: "Alan Holt",
        role: "Church Officer",
        image: "/images/alan-holt.jpg",
        bio: "Alan manages church property and keeps everything running smoothly."
    },
    {
        name: "Patricia Booth",
        role: "Child Protection Officer",
        image: "/images/placeholder-female.png",
        bio: (<>
            Patricia Booth is the Designated Person Under Child Protection Legislation. She can be contacted in complete confidence at any time:{" "}
            <a href="mailto:mpbBT234LP@gmail.com" className="text-primary hover:underline">
                mpbBT234LP@gmail.com
            </a>
        </>)
    },
    {
        name: "Jack Crawford",
        role: "Treasurer",
        image: "/images/placeholder-male.jpg", // Placeholder for missing images
        bio: "Our treasurer ensures the church's financial health and budgeting."
    },
    {
        name: "Pat Davies",
        role: "Honorary Secretary of Committee",
        image: "/images/placeholder-female.png", // Placeholder for missing images
        bio: "Pat is the secretary of the committee and ensures that all meetings are recorded and documented."
    },
];

export default function OurTeam() {
    return (
        <div className="w-full">
            {/* Banner Section */}
            <Banner
                publicId="regentStreetChurch/church-banner.png"
                alt="Who's Who?"
                title="Who's Who?"
                textPosition="bottomRight" // ✅ Text in bottom
                fontColour="one" // ✅ Text in accent color
            />

            {/* Team Members Section */}
            <section className="bg-base-200 py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center bg-base-100 p-6 shadow-md rounded-lg">
                                {/* Profile Image */}
                                <div className="w-36 h-36 mx-auto">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={150}
                                        height={150}
                                        className="rounded-full object-cover"
                                    />
                                </div>

                                {/* Name and Role */}
                                <h2 className="text-lg font-bold text-primary mt-4">{member.name}</h2>
                                <p className="text-secondary text-sm font-semibold">{member.role}</p>

                                {/* Bio */}
                                <p className="text-base-content mt-2">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}