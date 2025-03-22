'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function GuidesGroupCard({ group }) {
	const [hoveredSubgroup, setHoveredSubgroup] = useState(null);

	// Get the current image to display
	const imageToDisplay =
		hoveredSubgroup?.image?.cloudinaryUrl || group.image?.cloudinaryUrl;
	const imageAlt =
		hoveredSubgroup?.image?.alt ||
		group.image?.alt ||
		group.name ||
		'Scouts group image';

	return (
		<div className='card bg-base-100 shadow-md border border-gray-200'>
			{/* Image */}
			{imageToDisplay && (
				<figure className='relative w-full h-48 overflow-hidden rounded-t-lg'>
					<Image
						src={imageToDisplay.replace(
							'/upload/',
							'/upload/c_thumb,g_face,c_fill,w_600,h_300/'
						)}
						alt={imageAlt}
						fill
						sizes='(max-width: 768px) 100vw, 600px'
						className='object-top object-cover'
					/>
				</figure>
			)}

			{/* Card Content */}
			<div className='card-body'>
				<h2 className='card-title text-primary'>{group.name}</h2>
				<p className='text-gray-600'>{group.description}</p>

				{/* Subgroup Menu */}
				<div className='card-actions justify-end'>
					<ul className='menu menu-xl menu-horizontal bg-base-200'>
						{group.subgroups?.map((sub) => (
							<li key={sub.slug}>
								<Link
									href={`/whats-on/children/${sub.slug}`}
									className='btn btn-primary btn-sm'
									onMouseEnter={() => setHoveredSubgroup(sub)}
									onMouseLeave={() => setHoveredSubgroup(null)}>
									{sub.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
