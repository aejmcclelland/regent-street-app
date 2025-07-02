import { getCollectionContent } from 'lib/payload';
import Banner from '@/components/Banner';
import { groupCardComponents } from '@/components/groupCardComponents';

function extractPlainTextFromLexical(description: any): string {
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

export default async function OrganisationsPage() {
	// Fetch all 'organisations' groups from Payload CMS
	const organisationGroups = await getCollectionContent('organisations', 10);
	console.log('Fetched collection:', organisationGroups);
	return (
		<>
			{/* Banner Section */}
			<Banner
				publicId='https://res.cloudinary.com/dqeszgo28/image/upload/t_sundays/v1742673268/regentStreetChurch/sunday_school_nw4az0.png'
				alt='Organisations'
				title='Organisations'
				textPosition='bottomLeft'
				fontColour='three'
			/>

			{/* Dynamic Cards Section */}
			<section className='py-10'>
				<div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
					{organisationGroups.map((group: any) => {
						const Component =
							groupCardComponents[group.slug] || groupCardComponents.default;
							console.log('Rendering group:', group.slug, group.subgroups);
						return (
							<Component
								key={group.slug || group.name}
								group={{
									name: group.name,
									image: group.image,
									slug: group.slug,
									subgroups: group.subgroups || [],
									description:
										typeof group.description === 'object'
											? extractPlainTextFromLexical(group.description)
											: group.description,
								}}
								basePath="/whats-on/organisations"
							/>
						);
					})}

					{organisationGroups.length === 0 && (
						<p className='text-center text-gray-500'>No organisations found.</p>
					)}
				</div>
			</section>
		</>
	);
}
