import { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { singletonAccess } from '@/access/singletonAccess';
import { emailAccessConfig } from '@/access/emailAccessConfig';
import { shouldShowAdminCollection } from '@/access/canViewCollectionInAdmin';

export const Rainbows: CollectionConfig = {
	slug: 'rainbows',
	admin: {
		useAsTitle: 'name',
		hidden: ({ user }) =>
			!shouldShowAdminCollection('rainbows', user?.email, user?.roles),
	},
	access: {
		...singletonAccess('rainbows', emailAccessConfig.rainbows),
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true,
		},
		{
			name: 'description',
			type: 'richText',
			editor: lexicalEditor(),
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
		},
		{
			name: 'leaderId',
			type: 'relationship',
			relationTo: 'users',
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
