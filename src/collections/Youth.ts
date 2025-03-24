import { CollectionConfig } from 'payload';
import { singletonAccess } from '@/access/singletonAccess';
import { emailAccessConfig } from '@/access/emailAccessConfig';
import { shouldShowAdminCollection } from '@/access/canViewCollectionInAdmin';

export const Youth: CollectionConfig = {
	slug: 'youth',
	labels: { singular: 'Youth', plural: 'Youth' },
	admin: {
		useAsTitle: 'title',
		hidden: ({ user }) =>
			!shouldShowAdminCollection('youth', user?.email, user?.roles),
	},
	access: {
		...singletonAccess('youth', emailAccessConfig.rainbows),
	},
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'description', type: 'richText' },
		{ name: 'date', type: 'date' },
		{
			name: 'category',
			type: 'select',
			options: ['Quest', 'Scouts', 'Guides', 'Youth Club'],
			required: true,
		},
		{
			name: 'leaderId',
			type: 'relationship',
			relationTo: 'users',
			required: false,
			hasMany: true, // Allows multiple leaders per group
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

export default Youth;
