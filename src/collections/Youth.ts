import { CollectionConfig } from 'payload';

export const Youth: CollectionConfig = {
	slug: 'youth',
	labels: { singular: 'Youth', plural: 'Youths' },
	access: { read: () => true, update: () => true },
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'description', type: 'richText' },
		{ name: 'date', type: 'date' },
	],
};

export default Youth;
