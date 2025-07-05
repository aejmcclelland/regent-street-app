'use client';
import React from 'react';

export default function FindUs({
	title = 'Find Us',
	mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1323.0315161428714!2d-5.701499275427907!3d54.59467364892047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48617500581c9c91%3A0x7be202c625ee17ba!2sRegent%20Street%20Presbyterian%20Church!5e0!3m2!1sen!2suk!4v1751231680009!5m2!1sen!2suk',
	parkingInfo = 'Parking is available at the back of the church on Sundays. Just drive carefully through the front gate and down the right side of the church. Alternatively, there is a public car park facing our back gates on Mill Street.',
}: {
	title?: string;
	mapSrc?: string;
	parkingInfo?: string;
}) {
	return (
		<div className='space-y-4 bg-primary text-primary-content p-6 rounded-md'>
			<h2 className='text-3xl font-bold'>{title}</h2>
			<p className='bg-red-50 rounded-md p-4 text-lg'>{parkingInfo}</p>
			<div className='w-full h-[450px] border border-base-300 rounded-md overflow-hidden'>
				<iframe
					src={mapSrc}
					width='100%'
					height='100%'
					style={{ border: 0 }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</div>
	);
}
