import type { CollectionConfig } from 'payload';
import { emailAccessConfig } from '@/access/emailAccessConfig';
import { shouldShowAdminCollection } from '@/access/canViewCollectionInAdmin';

export const Organisations: CollectionConfig = {
	slug: 'organisations',
	labels: {
		singular: 'Organisation',
		plural: 'Organisations',
	},
	admin: {
		useAsTitle: 'name',
		hidden: ({ user }) =>
			!shouldShowAdminCollection('organisations', user?.email, user?.roles),
	},

	access: {
		read: () => true,

		create: ({ req }) => {
			const email = req.user?.email;
			const allowed =
				!!email && emailAccessConfig.organisations.includes(email);
			console.log('[CREATE access] User email:', email, 'Allowed:', allowed);
			return allowed;
		},
		update: ({ req }) => {
			const email = req.user?.email;
			const allowed =
				!!email && emailAccessConfig.organisations.includes(email);
			console.log('[UPDATE access] User email:', email, 'Allowed:', allowed);
			return allowed;
		},
		delete: ({ req }) => {
			const email = req.user?.email;
			const allowed =
				!!email && emailAccessConfig.organisations.includes(email);
			console.log('[DELETE access] User email:', email, 'Allowed:', allowed);
			return allowed;
		},
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
