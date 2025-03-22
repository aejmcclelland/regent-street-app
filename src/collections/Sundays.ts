import { CollectionConfig } from 'payload';

export const Sundays: CollectionConfig = {
	slug: 'sundays',
	labels: { singular: 'Sunday', plural: 'Sundays' },
	access: { read: () => true, update: () => true },
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'date', type: 'date', required: true },
		{ name: 'description', type: 'richText' },
		{
			name: 'banner',
			type: 'upload',
			relationTo: 'media',
			required: false,
			admin: {
				position: 'sidebar',
			},
		},
	],
};

export default Sundays;
