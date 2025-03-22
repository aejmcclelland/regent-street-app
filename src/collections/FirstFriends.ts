import { CollectionConfig } from 'payload';
import { isSuperAdminOrAdmin } from '../access/adminAccess';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const FirstFriends: CollectionConfig = {
	slug: 'firstFriends',
	labels: {
		singular: 'First Friends',
		plural: 'First Friends Groups',
	},
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true, // Everyone can view
		create: isSuperAdminOrAdmin, // Only superadmins and specific admins can create
		update: isSuperAdminOrAdmin, // Restrict updates
		delete: isSuperAdminOrAdmin, // Restrict deletion
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
		},
		{
			name: 'description',
			type: 'richText',
			required: true,
			editor: lexicalEditor(),
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media',
			required: false,
		},
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'leaderId',
			type: 'relationship',
			relationTo: 'users',
			required: false,
			hasMany: true, // Multiple leaders can be assigned
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
