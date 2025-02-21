import { v2 as cloudinary } from 'cloudinary';
import { Payload } from 'payload';

// ✅ Configure Cloudinary with environment variables
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Cloudinary Upload Handler for Payload
 */
export const cloudinaryUpload = async ({
	data,
	file,
	payload,
}: {
	data: any;
	file: any;
	payload: Payload;
}) => {
	try {
		const uploadResponse = await cloudinary.uploader.upload(file.path, {
			folder: 'regent-street-church', // ✅ Upload to a specific folder
		});

		// ✅ Store the Cloudinary URL in Payload CMS
		return { imageUrl: uploadResponse.secure_url };
	} catch (error) {
		console.error('Cloudinary Upload Error:', error);
		throw new Error('Image upload failed');
	}
};
