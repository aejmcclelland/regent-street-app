import { resolveLinkedPage } from '@/lib/resolveLinkedPage';
import { RichText } from '@/components/RichText';
import Link from 'next/link';
import TermCalendar from '@/components/TermCalendar';
import Banner from '@/components/Banner';

const featureComponents: Record<string, React.FC<{ data: any }>> = {
	calendar: ({ data }) => <TermCalendar calendar={data.termDates} />,
	// gallery: ({ data }) => <Gallery images={data.gallery} />,
	// form: ({ data }) => <PermissionForm form={data.permissionForm} />,
};

export default async function ChildrenGroupPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	if (!slug) {
		return <p className='text-center text-gray-500'>Invalid request.</p>;
	}

	const displayData = await resolveLinkedPage({
		primaryCollection: 'children',
		slug,
	});

	if (!displayData?.name) {
		return <p className='text-center text-gray-500'>Group not found.</p>;
	}

	return (
		<>
			{/* Top Banner */}
			<Banner
				publicId={
					displayData.banner?.cloudinaryUrl ??
					'https://res.cloudinary.com/dqeszgo28/image/upload/v1739741911/regentStreetChurch/church-banner_nu1vvw.jpg'
				}
				alt={
					displayData.banner?.alt ??
					displayData.name ??
					"Children's ministry image"
				}
				title={displayData.name}
				textPosition='bottomLeft'
				fontColour='two'
			/>

			<div className='container mx-auto py-10 px-4'>
				{/* Description and optional feature block */}
				<div
					className={`bg-base-100 border border-base-300 rounded-xl p-6 flex flex-col md:flex-row gap-8 mt-10 ${
						!displayData.features?.length ? '' : 'items-start'
					}`}>
					<div
						className={
							displayData.features?.length ? 'w-full md:w-1/2' : 'w-full'
						}>
						<h1 className='text-3xl font-bold text-primary mb-4'>
							{displayData.name}
						</h1>
						<div className='text-gray-600'>
							<RichText data={displayData.description} />
						</div>
					</div>

					{/* Optional feature (e.g. TermCalendar) */}
					{Array.isArray(displayData.features) &&
						displayData.features.length > 0 && (
							<div className='w-full md:w-1/2'>
								{displayData.features.map((featureKey: string) => {
									const FeatureComponent = featureComponents[featureKey];
									return FeatureComponent ? (
										<div key={featureKey} className='mt-6 md:mt-0'>
											<FeatureComponent data={displayData} />
										</div>
									) : null;
								})}
							</div>
						)}
				</div>

				{/* Subgroups navigation */}
				{Array.isArray(displayData.subgroups) &&
					displayData.subgroups.length > 0 && (
						<div className='mt-10'>
							<ul className='menu menu-vertical lg:menu-horizontal menu-lg bg-base-200 rounded-box'>
								{displayData.subgroups.map((sub: any) => (
									<li key={sub.slug}>
										<Link href={`/whats-on/children/${sub.slug}`}>
											{sub.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					)}

				{/* Back link */}
				<Link
					href='/whats-on/children'
					className='btn btn-soft btn-primary mt-10'>
					← Back to All Children’s Ministry
				</Link>
			</div>
		</>
	);
}
