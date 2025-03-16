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
	],
};

export default Team;
