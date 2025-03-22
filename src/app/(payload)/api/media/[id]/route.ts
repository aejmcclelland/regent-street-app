import { NextResponse } from 'next/server';
import payload from 'payload';

export async function GET(req: Request, { params }: any) {
	try {
		const { id } = params;

		if (!id) {
			return NextResponse.json({ error: 'Missing media ID' }, { status: 400 });
		}

		// Use the correct method to find the media
		const media = await payload.findByID({
			collection: 'media',
			id,
			depth: 1,
		});

		if (!media || !media.filename) {
			return NextResponse.json({ error: 'Media not found' }, { status: 404 });
		}

		// Check if the media has a Cloudinary URL, else return local URL
		const imageUrl = media.url || `/media/${media.filename}`;

		return NextResponse.json({
			url: imageUrl,
			alt: media.alt || 'Image', // Optional: return alt text if available
			filename: media.filename, // Optional: expose filename for debug/fallback
		});
	} catch (error) {
		console.error('Error fetching media:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
