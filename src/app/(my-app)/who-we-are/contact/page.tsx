import Banner from '@components/Banner';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { getCollectionContent } from 'lib/payload'; //Import function to fetch team members

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
						<p className='text-xl'>48a Regent St, Newtownards BT23 4LP</p>
						<div className='flex items-center gap-2'>
							<FaPhone className='text-2xl text-white' />
							<a
								href='tel:02891822416'
								className='text-primary text-xl hover:underline'>
								028 9182 2416
							</a>
						</div>
						<div className='flex items-center gap-2'>
							<MdOutlineEmail className='text-2xl text-white' />
							<a
								href='mailto:regent.st@btconnect.com'
								className='text-primary text-xl hover:underline'>
								regent.st@btconnect.com
							</a>
						</div>
					</div>
					<div className='space-y-4 bg-primary text-primary-content p-6 rounded-md'>
						<h2 className='text-3xl font-bold'>Find Us</h2>
						<div className='w-full h-[450px] border border-base-300 rounded-md overflow-hidden'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1323.0315161428714!2d-5.701499275427907!3d54.59467364892047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48617500581c9c91%3A0x7be202c625ee17ba!2sRegent%20Street%20Presbyterian%20Church!5e0!3m2!1sen!2suk!4v1751231680009!5m2!1sen!2suk'
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
