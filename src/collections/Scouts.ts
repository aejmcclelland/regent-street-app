import type { CollectionConfig } from 'payload';
import { singletonAccess } from '@/access/singletonAccess';
import { emailAccessConfig } from '@/access/emailAccessConfig';
import { shouldShowAdminCollection } from '@/access/canViewCollectionInAdmin';

export const Scouts: CollectionConfig = {
	slug: 'scouts',
	labels: {
		singular: 'Scout',
		plural: 'Scouts',
	},
	admin: {
		useAsTitle: 'name',
		hidden: ({ user }) =>
			!shouldShowAdminCollection('scouts', user?.email, user?.roles),
	},
	access: {
		...singletonAccess('scouts', emailAccessConfig.scouts),
	},
	fields: [
		{ name: 'name', type: 'text', required: true },
		{ name: 'description', type: 'textarea', required: true },
		{ name: 'image', type: 'upload', relationTo: 'media', required: false },
		{ name: 'slug', type: 'text', required: true },
		{
			name: 'leaderId',
			type: 'relationship',
			relationTo: 'users',
			required: false,
			hasMany: true,
		},
		{
			name: 'subgroups',
			type: 'array',
			fields: [
				{ name: 'title', type: 'text', required: true },
				{ name: 'slug', type: 'text', required: true },
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
					required: false,
				},
			],
		},
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
