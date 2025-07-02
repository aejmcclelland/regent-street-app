"use client";
import Image from "next/image";
import Link from "next/link";

export default function ChildrenCard({ group, basePath = "children" }) {
    return (
        <div className="card bg-base-100 shadow-md border border-gray-200">
            {/* ✅ Image Top - Responsive */}
            <figure className="relative w-full h-48 overflow-hidden rounded-t-lg bg-gray-100 flex items-center justify-center">
                {group.image?.cloudinaryUrl ? (
                    <Image
                        src={group.image.cloudinaryUrl.replace('/upload/', '/upload/c_thumb,g_face,c_fill,w_600,h_300/')}
                        alt={group.image?.alt || group.name || "Children's group image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-top object-cover"
                    />
                ) : (
                    <span className="text-gray-400 text-sm">No image available</span>
                )}
            </figure>

            {/* ✅ Card Content */}
            <div className="card-body">
                <h2 className="card-title text-primary">{group.name}</h2>
                <p className="text-gray-600">{group.description}</p>

                <div className="card-actions justify-end">
                    <Link href={`/whats-on/${basePath}/${group.slug}`} className="btn  btn-lg btn-soft btn-primary">
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}