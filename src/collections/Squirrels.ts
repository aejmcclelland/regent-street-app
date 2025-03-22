import { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Squirrels: CollectionConfig = {
	slug: 'squirrels',
	labels: {
		singular: 'Squirrel Group',
		plural: 'Squirrel Groups',
	},
	admin: {
		useAsTitle: 'name',
		description: 'Squirrels group details including leaders and images',
	},
	access: {
		read: () => true,
		create: ({ req }) => {
			const user = req.user;
			return (
				user?.roles?.includes('superadmin') ||
				user?.email === 'squirrelleader@example.com'
			);
		},
		update: ({ req }) => {
			const user = req.user;
			return (
				user?.roles?.includes('superadmin') ||
				user?.email === 'squirrelleader@example.com'
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
			required: true,
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
