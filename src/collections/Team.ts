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
			name: 'image',
			type: 'relationship',
			relationTo: 'media',
			required: false,
			admin: {
				description: 'Select a Cloudinary image from Media library',
			},
		},
		{
			name: 'positionOrder',
			type: 'number',
			required: true,
			admin: {
				description:
					'Lower numbers appear first (e.g. 1 = Minister, 2 = Elder, 3 = Member)',
			},
			defaultValue: 99, // Default to a high number so lesser roles go at the end
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

export default Team;
