import Banner from '../../../../components/Banner';
import { getCollectionContent } from 'lib/payload';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { IoLogoYoutube } from 'react-icons/io5';
import { MdPlace } from 'react-icons/md';
import IconLink from '../../../../components/IconLink';

//Define Type for Sundays Content
interface SundaysItem {
	id: string;
	title?: string;
	banner?: {
		cloudinaryUrl: string;
		alt?: string;
	};
	description?: SerializedEditorState | null;
}

const youtubeIcon = {
	href: 'https://www.youtube.com/@regentstreetpci9220',
	icon: <IoLogoYoutube className='w-6 h-6 text-red-600' />,
	ariaLabel: 'YouTube Page',
};

// Fetch Sundays content from Payload CMS
export default async function Sundays() {
	const sundaysContent = (await getCollectionContent(
		'sundays'
	)) as SundaysItem[];

	console.log(
		'Fetched Sundays Content:',
		JSON.stringify(sundaysContent, null, 2)
	);

	return (
		<div className='w-full'>
			{/*  Banner Section */}
			<Banner
				publicId={sundaysContent[0]?.banner?.cloudinaryUrl}
				alt={sundaysContent[0]?.banner?.alt || 'Sunday Services'}
				title='Sunday Services'
				textPosition='bottomLeft'
				fontColour='two'
			/>
			{/*  Content Section */}
			<section className='bg-base-200 py-10'>
				<div className='container mx-auto px-4 space-y-12'>
					{/* Sunday Info + Livestream + Find Us */}
					<div className='bg-base-100 px-6 py-8 rounded-lg shadow-md'>
						<div className='grid md:grid-cols-2 gap-6 items-stretch'>
							{/* Left Column: Sunday + Livestream */}
							<div className='flex flex-col justify-between h-full space-y-6 text-gray-700'>
								{/* Sundays at Regent Street */}
								<div className='space-y-4 p-4 bg-base-100 rounded-lg shadow-md'>
									<h3 className='text-3xl font-extrabold text-primary'>
										Sundays at Regent Street
									</h3>
									<p className='text-xl font-bold'>
										11.00 am – with Rev. Anne Tolland
									</p>
									<p className='text-lg'>
										Children leave the main service after the children&apos;s
										address for their own age-appropriate programme.
									</p>
									<h3 className='text-xl font-semibold text-primary'>
										The Hub
									</h3>
									<p className='text-lg'>
										Everyone is welcome for tea or coffee in The Hub before our
										Sunday service from 10:15am
									</p>
								</div>

								{/* Livestream */}
								<div className='bg-secondary p-4 rounded-lg space-y-2 text-secondary-content shadow-md h-full'>
									<h3 className='text-2xl font-bold'>Livestream</h3>
									<p>You can join us live each week on our YouTube channel.</p>
									<IconLink
										href={youtubeIcon.href}
										icon={<IoLogoYoutube className='w-8 h-8 text-white' />}
										label='Watch Live on YouTube'
										className='text-white font-semibold'
									/>
								</div>
							</div>

							{/* Right Column: Image + Find Us */}
							<div className='flex flex-col justify-between h-full space-y-4'>
								{/* Image */}
								<div className='w-full h-48 md:h-64 relative'>
									<img
										src='https://res.cloudinary.com/dqeszgo28/image/upload/t_portfolio-projectCard/v1751227341/regentStreetChurch/linkedin-sales-solutions-IjkIOe-2fF4-unsplash_egxwp5.jpg'
										alt='People chatting happily'
										className='w-full h-full object-cover rounded-lg shadow-lg'
									/>
									{/* TODO: Replace with Payload CMS source when available */}
								</div>

								{/* Find Us */}
								<div className='bg-accent p-4 rounded-lg text-accent-content shadow-md space-y-2 h-full'>
									<h3 className='text-2xl font-bold'>Find Us</h3>
									<a
										href='https://maps.app.goo.gl/HCgDiKACQy36ncci6'
										target='_blank'
										rel='noopener noreferrer'
										className='text-lg font-medium flex items-center gap-2 hover:underline'>
										<MdPlace className='text-xl text-white' />
										Regent Street Presbyterian Church, Newtownards
									</a>
									<p>
										Visit our{' '}
										<a
											href='/who-we-are/contact'
											className='underline hover:text-white'>
											Contact page
										</a>{' '}
										to find our location, map, and contact details.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
