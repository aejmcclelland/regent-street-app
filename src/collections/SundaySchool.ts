import type { CollectionConfig } from 'payload';
import { singletonAccess } from '@/access/singletonAccess';
import { emailAccessConfig } from '@/access/emailAccessConfig';
import { shouldShowAdminCollection } from '@/access/canViewCollectionInAdmin';

export const SundaySchool: CollectionConfig = {
	slug: 'sundaySchool',
	labels: {
		singular: 'Sunday School',
		plural: 'Sunday Schools',
	},
	admin: {
		useAsTitle: 'name',
		hidden: ({ user }) =>
			!shouldShowAdminCollection('sundaySchool', user?.email, user?.roles),
	},
	access: {
		...singletonAccess('sundaySchool', emailAccessConfig.rainbows),
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

export default SundaySchool;
