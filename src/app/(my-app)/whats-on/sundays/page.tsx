import Banner from '../../../../components/Banner';
import { getCollectionContent } from 'lib/payload';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

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
				<div className='container mx-auto px-4 space-y-10'>
					{sundaysContent.length > 0 ? (
						sundaysContent.map((item) => (
							<div key={item.id}>
								<h2 className='text-4xl font-bold text-center text-primary mb-6'>
									{item.title || 'Sunday Services'}
								</h2>

								<div className='text-lg text-gray-700 space-y-4'>
									{item.description ? (
										<RichText data={item.description} />
									) : (
										<p className='text-center text-gray-500'>
											No content available
										</p>
									)}
								</div>
							</div>
						))
					) : (
						<p className='text-center text-gray-500'>
							No Sunday service content available
						</p>
					)}
				</div>
			</section>
		</div>
	);
}
