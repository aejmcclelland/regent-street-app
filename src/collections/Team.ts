import type { CollectionConfig } from 'payload';
import {
	isSuperAdminOrAdmin,
	isAdminOrEditor,
	isSuperAdmin,
} from '../access/adminAccess';

export const Team: CollectionConfig = {
	slug: 'team',
	admin: {
		useAsTitle: 'name',
		preview: (doc) => {
			if (!doc?.id) return null;
			return `${process.env.NEXT_PUBLIC_SITE_URL}/who-we-are/team/${doc.id}`;
		},
	},
	access: {
		read: () => true,
		create: isSuperAdminOrAdmin,
		update: isAdminOrEditor,
		delete: isSuperAdmin,
	},
	fields: [
		{ name: 'name', type: 'text', required: true },
		{ name: 'role', type: 'text', required: true },
		{ name: 'email', type: 'text', required: false },
		{ name: 'bio', type: 'richText' },
		{
			name: 'positionOrder',
			type: 'number',
			required: true,
			defaultValue: 100, // Default value (higher number means lower priority)
			admin: {
				description: 'Lower numbers appear first.',
			},
		},

		{
			name: 'image',
			type: 'relationship', // ✅ Change from ObjectId to Relationship
			relationTo: 'media', // ✅ Relate to media collection
			required: false,
			admin: {
				description: 'Select a profile image from the Media library',
			},
		},
	],
};

export default Team;
