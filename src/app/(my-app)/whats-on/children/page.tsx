import React, { JSX } from 'react';
import { getCollectionContent } from 'lib/payload';
import Banner from '@/components/Banner';
import { groupCardComponents } from '@/components/groupCardComponents';

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
				title="Children's Ministry"
				textPosition='bottomLeft'
				fontColour='two'
			/>

			<section className='py-10'>
				<div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
					{filteredGroups.map((group: Group) => {
						const Component = (groupCardComponents[group.slug] ||
							groupCardComponents.default) as React.FC<{
							group: {
								name: string;
								image: { cloudinaryUrl: string; alt?: string };
								slug: string;
								subgroups: Subgroup[];
								description: string;
							};
							basePath: string;
						}>;

						return (
							<Component
								key={group.id}
								group={{
									name: group.name,
									image: group.image,
									slug: group.slug,
									subgroups: group.linkedPage?.value?.subgroups || [],
									description:
										typeof group.description === 'object'
											? extractPlainTextFromLexical(
													group.description as LexicalRichTextField
											  )
											: group.description,
								}}
								basePath='/children'
							/>
						);
					})}

					{filteredGroups.length === 0 && (
						<p className='text-center text-gray-500'>
							No children’s groups found.
						</p>
					)}

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
