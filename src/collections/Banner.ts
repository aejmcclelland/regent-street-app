// src/collections/Banners.ts
import { CollectionConfig } from 'payload';

export const Banners: CollectionConfig = {
	slug: 'banners',
	admin: {
		useAsTitle: 'label',
	},
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	fields: [
		{
			name: 'label',
			type: 'text',
			required: true,
		},
		{
			name: 'page',
			type: 'select',
			required: true,
			options: [
				{ label: 'Home', value: 'home' },
				{ label: 'Team', value: 'team' },
				{ label: 'Sundays', value: 'sundays' },
				{ label: 'Youth', value: 'youth' },
				{ label: 'Children', value: 'children' },
				// Add more as needed
			],
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: true,
		},
		{
			name: 'alt',
			type: 'text',
		},
		{
			name: 'textPosition',
			type: 'select',
			options: ['center', 'bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
			defaultValue: 'bottomLeft',
		},
		{
			name: 'fontColour',
			type: 'select',
			options: ['one', 'two', 'three', 'four'],
			defaultValue: 'one',
		},
	],
};
