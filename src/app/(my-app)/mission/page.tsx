import HomeButton from '@/components/HomeButton';
import Banner from '@/components/Banner';
import LinkNavbar from '@/components/LinkNavbar';

export default function Mission() {
	return (
		<div className='w-full'>
			{/* Banner Section */}
			<Banner
				publicId='regentStreetChurch/watters-memorial.jpg'
				alt='Church Mission'
				title='Mission'
				textPosition='bottomLeft' // ✅ Text in bottom left
				fontColour='two' // ✅ Text in accent color
			/>

			{/* Navbar Section */}
			<LinkNavbar
				links={[
					{ id: 'the-link', label: 'The Link' },
					{ id: 'fields-of-life', label: 'Fields of Life' },
					{ id: 'street-pastors', label: 'Street Pastors' },
				]}
			/>
			<div className='max-w-4xl mx-auto px-6 py-12 space-y-10'>
				<section id='the-link' className='card bg-base-100 shadow-md'>
					<div className='card-body space-y-4'>
						<h2 className='card-title text-primary'>The Link</h2>
						<p className='text-lg text-gray-700'>
							The Link works with vulnerable and at risk individuals, many of
							whom experience deprivation, exclusion or loneliness. We provide a
							range of facilities, programmes and support for young people;
							older people; children and young parents; migrant workers; people
							experiencing chronic addiction to alcohol; and churches and
							community groups wishing to engage in community and good relations
							work. It is our vision to see vibrant, connected families and
							communities where individuals have opportunities to reach their
							full potential.
						</p>
					</div>
				</section>

				<section id='fields-of-life' className='card bg-base-200 shadow-md'>
					<div className='card-body space-y-4'>
						<h2 className='card-title text-primary'>Fields of Life</h2>
						<p className='text-lg text-gray-700'>
							Our vision is to see educated and skilled young people, inspired
							by faith, hope and love, transform their communities.
						</p>
						<p className='text-lg text-gray-700'>
							Fields of Life has thirty years of experience working in East
							Africa with projects in Uganda, Rwanda, and South Sudan.
						</p>
						<p className='text-lg text-gray-700'>
							We transform the lives of the most vulnerable and marginalised
							people in East Africa through quality education, clean water,
							health promotion and other community-based programmes. We empower
							local churches and partners to become drivers of change in their
							own communities.
						</p>
					</div>
				</section>

				<section id='street-pastors' className='card bg-base-300 shadow-md'>
					<div className='card-body space-y-4'>
						<h2 className='card-title text-primary'>Street Pastors</h2>
						<p className='text-lg text-gray-700'>
							Street Pastors are Christians from different churches making a
							difference on the streets of Ards & North Down on Friday &
							Saturday nights. We help people get home safe, give out flip
							flops, pick up bottles, listen to people’s stories, help those in
							distress, point people to further help plus much more. We don’t
							preach, but often have opportunity to share and pray with those
							who want it.
						</p>
						<p className='text-lg text-gray-700'>
							We are a team of trained volunteers who care about our community
							and want to make a difference. We work in partnership with the
							Police, Ards & North Down Borough Council, local churches and
							other agencies.
						</p>
					</div>
				</section>

				<HomeButton />
			</div>
		</div>
	);
}
export const metadata = {
	title: 'Mission - Regent Street Presbyterian Church',
	description:
		'Information about mission and charity work at Regent Street Presbyterian Church.',
	openGraph: {
		title: 'Mission - Regent Street Presbyterian Church',
		description:
			'Information about Mission groups at Regent Street Presbyterian Church.',
	},
};
