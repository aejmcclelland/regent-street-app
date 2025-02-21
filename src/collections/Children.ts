import { CollectionConfig } from 'payload';

export const Children: CollectionConfig = {
	slug: 'children',
	labels: { singular: 'Children', plural: 'Children' },
	access: { read: () => true, update: () => true },
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'description', type: 'richText' },
		{ name: 'date', type: 'date' },
		{
			name: 'image',
			label: 'Profile Image',
			type: 'upload',
			relationTo: 'media', // Ensure the media collection exists
			required: false,
		},
	],
};

export default Children;
