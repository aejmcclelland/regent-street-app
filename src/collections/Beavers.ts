import { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { singletonAccess } from '@/access/singletonAccess';

export const Beavers: CollectionConfig = {
	slug: 'beavers',
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true,
		create: ({ req }) => {
			const user = req.user;
			return (
				user?.roles?.includes('superadmin') ||
				user?.email === 'beaversleader@example.com'
			);
		},
		update: ({ req }) => {
			const user = req.user;
			return (
				user?.roles?.includes('superadmin') ||
				user?.email === 'beaversleader@example.com'
			);
		},
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
