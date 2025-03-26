"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Subgroup {
    title: string;
    slug: string;
    image?: {
        cloudinaryUrl: string;
        alt?: string;
    };
}

interface Group {
    name: string;
    slug?: string; // Updated to make slug optional
    description: string;
    image?: {
        cloudinaryUrl: string;
        alt?: string;
    };
    subgroups?: Subgroup[] | { [key: string]: Subgroup }; // Updated to allow subgroups as an object
}


export default function GroupCard({ group }: { group: Group }) {
    const [hoveredSubgroup, setHoveredSubgroup] = useState<Subgroup | null>(null);

    const imageToDisplay = hoveredSubgroup?.image?.cloudinaryUrl || group.image?.cloudinaryUrl;
    const imageAlt = hoveredSubgroup?.image?.alt || group.image?.alt || group.name || "Group image";
   const subgroups = Array.isArray(group.subgroups)
   
    ? group.subgroups
    : Object.values(group.subgroups || {});

    console.log("Full group object:", group);
    
    return (
        <div className="card bg-base-100 shadow-md border border-gray-200">
            {imageToDisplay && (
                <figure className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                        src={imageToDisplay.replace('/upload/', '/upload/c_fill,g_auto,w_1660,h_800/')}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                        className="object-top object-center"
                    />
                </figure>
            )}

            <div className="card-body">
                <h2 className="card-title text-primary">{group.name}</h2>
                <p className="text-gray-600">{group.description}</p>

               {subgroups.length > 0 && (
    <div className="card-actions justify-end">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box">
            {subgroups.map((sub) => (
                <li key={sub.slug}>
                    <Link
                        href={`/whats-on/children/${sub.slug}`}
                        className="btn btn-soft btn-info"
                        onMouseEnter={() => setHoveredSubgroup(sub)}
                        onMouseLeave={() => setHoveredSubgroup(null)}
                    >
                        {sub.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)}
            </div>
        </div>
    );
}