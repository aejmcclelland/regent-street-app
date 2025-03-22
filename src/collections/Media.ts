import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
	slug: 'media',
	admin: {
		useAsTitle: 'cloudinaryUrl', //  Fixes "filename does not exist" error
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	fields: [
		{
			name: 'cloudinaryUrl',
			type: 'text',
			required: false,
			admin: {
				description: 'Paste the Cloudinary URL for this image.',
			},
		},
		{
			name: 'alt',
			type: 'text',
			required: false,
			admin: {
				description: 'Alternative text for accessibility',
			},
		},
	],
};

export default Media;
