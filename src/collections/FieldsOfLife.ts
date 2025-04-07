import { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { singletonAccess } from '@/access/singletonAccess';
import { emailAccessConfig } from '@/access/emailAccessConfig';
import { shouldShowAdminCollection } from '@/access/canViewCollectionInAdmin';

export const FieldsOfLife: CollectionConfig = {
	slug: 'fieldsOfLife',
	labels: {
		singular: 'field',
		plural: 'FieldsOfLife',
	},
	admin: {
		useAsTitle: 'name',
		hidden: ({ user }) =>
			!shouldShowAdminCollection('fieldsOfLife', user?.email, user?.roles),
	},
	access: {
		...singletonAccess('fieldsOfLife', emailAccessConfig.firstFriends),
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
		{
			name: 'termDates',
			type: 'array',
			label: 'Term Calendars',
			fields: [
				{
					name: 'termName',
					type: 'text',
					label: 'Term Name',
				},
				{
					name: 'weeks',
					type: 'array',
					label: 'Weeks',
					fields: [
						{
							name: 'date',
							type: 'date',
						},
						{
							name: 'note',
							type: 'text',
							required: false,
						},
					],
				},
			],
		},
	],
};
