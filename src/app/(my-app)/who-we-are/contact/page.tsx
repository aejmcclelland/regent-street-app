import Banner from '@components/Banner';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { getCollectionContent } from 'lib/payload';
import FindUs from '@components/FindUs';

export default async function ContactUs() {
	return (
		<div className='w-full'>
			{/* Banner Section */}
			<Banner
				publicId='regentStreetChurch/church-banner.png'
				alt='Contact Us'
				title='Contact Us'
				textPosition='bottomRight'
				fontColour='one'
			/>
			<div className='bg-base-200 py-10 px-6 md:px-12 text-base-content'>
				<div className='max-w-4xl mx-auto space-y-6'>
					<div className='space-y-2 bg-secondary text-secondary-content p-6 rounded-md'>
						<h2 className='text-3xl font-bold'>Address</h2>
						<div className='bg-red-50 rounded-md p-4 text-lg'>
							<p className='text-xl'>48a Regent St, Newtownards BT23 4LP</p>
							<div className='flex items-center gap-2'>
								<FaPhone className='text-2xl text-primary' />
								<a
									href='tel:02891822416'
									className='text-primary text-xl hover:underline'>
									028 9182 2416
								</a>
							</div>
							<div className='flex items-center gap-2'>
								<MdOutlineEmail className='text-2xl text-primary' />
								<a
									href='mailto:regent.st@btconnect.com'
									className='text-primary text-xl hover:underline'>
									regent.st@btconnect.com
								</a>
							</div>
						</div>
					</div>
					<FindUs />
				</div>
			</div>
		</div>
	);
}
