import React, { JSX } from 'react';
import { getCollectionContent } from 'lib/payload';
import Banner from '@/components/Banner';
import { groupCardComponents } from '@/components/groupCardComponents';
import LinkNavbar from '@/components/LinkNavbar';

type LexicalRichTextField = {
	root: {
		children: Array<{ text?: string; children?: Array<{ text: string }> }>;
	};
};

type Subgroup = {
	title: string;
	slug: string;
	image: {
		cloudinaryUrl: string;
		alt?: string;
	};
	id: string;
};

type Group = {
	id: string;
	name: string;
	slug: string;
	image: {
		cloudinaryUrl: string;
		alt?: string;
	};
	description: string | LexicalRichTextField;
	linkedPage?: {
		value?: {
			subgroups?: Subgroup[];
		};
	};
};

function extractPlainTextFromLexical(
	description: LexicalRichTextField
): string {
	if (
		!description ||
		typeof description !== 'object' ||
		!Array.isArray(description.root?.children)
	)
		return '';

	return description.root.children
		.map(
			(child: any) =>
				child.text ||
				(child.children ? child.children.map((n: any) => n.text).join(' ') : '')
		)
		.join(' ')
		.trim();
}

export default async function ChildrenPage(): Promise<JSX.Element> {
	const childrenGroups = await getCollectionContent('children', 10);

	const filteredGroups = (childrenGroups as unknown as Group[]).filter(
		(group) => ['sundaySchool', 'firstFriends'].includes(group.slug)
	);

	return (
		<>
			<Banner
				publicId='https://res.cloudinary.com/dqeszgo28/image/upload/t_sundays/v1742673268/regentStreetChurch/sunday_school_nw4az0.png'
				alt="Children's Ministry"
				title='Children'
				textPosition='bottomLeft'
				fontColour='two'
			/>
			<LinkNavbar
				links={[
					{ id: 'sunday-school', label: 'Sunday School' },
					{ id: 'first-friends', label: 'First Friends' },
					{ id: 'events', label: 'Events' },
				]}
			/>

			<section className='py-10'>
				<div className='container mx-auto px-4 space-y-10'>
					{filteredGroups.map((group: Group) => {
						const subgroups = group.linkedPage?.value?.subgroups ?? [];
						return (
							<section
								key={group.id}
								id={
									group.slug === 'sundaySchool'
										? 'sunday-school'
										: 'first-friends'
								}
								className='bg-base-100 p-6 rounded-lg shadow space-y-4'>
								<h2 className='text-2xl font-bold text-primary'>{group.name}</h2>

								{group.image?.cloudinaryUrl && (
									<img
										src={group.image.cloudinaryUrl}
										alt={group.image.alt || group.name}
										className='w-full max-w-md rounded shadow'
									/>
								)}

								<p className='text-gray-700'>
									{typeof group.description === 'object'
										? extractPlainTextFromLexical(
												group.description as LexicalRichTextField
										  )
										: group.description}
								</p>
								{subgroups.length > 0 && (
									<div>
										<h3 className='text-lg font-semibold mt-4'>Subgroups:</h3>
										<ul className='list-disc list-inside text-gray-700'>
											{subgroups.map((sub) => (
												<li key={sub.slug}>{sub.title}</li>
											))}
										</ul>
									</div>
								)}
							</section>
						);
					})}
					<div className='bg-base-200 p-6 rounded-lg shadow hover:shadow-lg transition-all'>
						<h3 className='text-xl font-bold text-primary mb-2'>Events</h3>
						<p className='text-gray-700 mb-4'>
							Holiday Bible Club and other children’s events.
						</p>
						<a
							href='/whats-on/children/events'
							className='inline-block mt-2 text-accent hover:underline font-semibold'>
							View Events
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
