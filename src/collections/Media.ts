import type { CollectionConfig } from 'payload';
import { isSuperAdmin } from '../access/adminAccess';

export const Media: CollectionConfig = {
	slug: 'media',
	labels: {
		singular: 'Image',
		plural: 'Images',
	},
	access: {
		read: () => true,
		create: () => true,
		delete: isSuperAdmin,
	},
	fields: [
		{
			name: 'imageUrl',
			label: 'Cloudinary Image URL',
			type: 'text',
			required: true,
			admin: {
				description: 'Paste the Cloudinary URL for this image.',
			},
		},
		{
			name: 'alt',
			label: 'Alt Text',
			type: 'text',
			required: false,
			admin: {
				description: 'Alternative text for accessibility.',
			},
		},
	],
};

export default Media;
