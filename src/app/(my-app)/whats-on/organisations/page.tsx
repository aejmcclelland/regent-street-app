import Banner from '@/components/Banner';

export default async function Organisations() {
	return (
		<div>
			<Banner
				publicId='regentStreetChurch/church-banner.png'
				alt='Organisations'
				title='Organistions'
				textPosition='bottomLeft'
				fontColour='three'
			/>
			<div className='container m-4 px-4'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					<p className='text-3xl font-bold'>Organisations</p>
				</div>
			</div>
		</div>
	);
}
