import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
	slug: 'media',
	admin: {
		useAsTitle: 'filename', //  Fixes "filename does not exist" error
	},
	upload: {
		staticDir: 'media', //  Store media in a static directory
		mimeTypes: ['image/*'], //  Restrict to images only
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	fields: [
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
