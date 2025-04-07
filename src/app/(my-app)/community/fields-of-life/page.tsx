import Banner from '@/components/Banner';
import { getCollectionContent } from 'lib/payload';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import TermCalendar from '@/components/TermCalendar';

//Define Type for FieldsOfLife Content
interface FieldsOfLifeItem {
	id: string;
	title?: string;
	banner?: {
		cloudinaryUrl: string;
		alt?: string;
	};
	description?: SerializedEditorState | null;
	termDates?: {
		termName: string;
		weeks: {
			date: string;
			note?: string;
		}[];
	}[];
}

export default async function FieldsOfLife() {
	const fieldsOfLifeContent = (await getCollectionContent(
		'fieldsOfLife'
	)) as FieldsOfLifeItem[];

	return (
		<div>
			<Banner
				publicId={fieldsOfLifeContent[0]?.banner?.cloudinaryUrl}
				alt={fieldsOfLifeContent[0]?.banner?.alt || 'Fields of Life'}
				title={fieldsOfLifeContent[0]?.title || 'Fields of Life'}
				textPosition='bottomLeft'
				fontColour='three'
			/>

			{/*  Content Section */}
			<section className='bg-base-200 py-10'>
				<div className='container mx-auto px-4 space-y-10'>
					{fieldsOfLifeContent.length > 0 ? (
						fieldsOfLifeContent.map((item) => (
							<div key={item.id}>
								<h2 className='text-4xl font-bold text-center text-primary mb-6'>
									{item.title || 'Fields of Life'}
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
							No fundraising information content available
						</p>
					)}
				</div>
			</section>
			{/* Optional feature (e.g. TermCalendar) */}
			{fieldsOfLifeContent[0]?.termDates &&
				fieldsOfLifeContent[0].termDates.length > 0 && (
					<div className='w-full md:w-2/3 mx-auto my-10'>
						<TermCalendar calendar={fieldsOfLifeContent[0].termDates} />
					</div>
				)}
		</div>
	);
}
