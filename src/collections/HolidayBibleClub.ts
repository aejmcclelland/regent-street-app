import type { CollectionConfig } from 'payload';
import { singletonAccess } from '@/access/singletonAccess';
import { emailAccessConfig } from '@/access/emailAccessConfig';
import { shouldShowAdminCollection } from '@/access/canViewCollectionInAdmin';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const HolidayBibleClub: CollectionConfig = {
	slug: 'holidayBibleClub',
	labels: {
		singular: 'Holiday Bible Club',
		plural: 'Holiday Bible Clubs',
	},
	admin: {
		useAsTitle: 'name',
		hidden: ({ user }) =>
			!shouldShowAdminCollection('holidayBibleClub', user?.email, user?.roles),
	},
	access: {
		...singletonAccess('holidayBibleClub', emailAccessConfig.holidayBibleClub),
	},
	fields: [
		{ name: 'name', type: 'text', required: true },
		{
			name: 'description',
			type: 'richText',
			required: true,
			editor: lexicalEditor(),
		},
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

export default HolidayBibleClub;
