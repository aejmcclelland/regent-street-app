import { CollectionConfig } from 'payload';

export const Kids: CollectionConfig = {
	slug: 'kids',
	labels: { singular: 'Kids', plural: 'Kids' },
	access: { read: () => true, update: () => true },
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'description', type: 'richText' },
		{ name: 'date', type: 'date' },
	],
};

export default Kids;
