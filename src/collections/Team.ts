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
			type: 'upload',
			relationTo: 'media', // ✅ Links to the Media collection
			required: false,
			admin: {
				description: 'Select an image from the Media library',
			},
		},
	],
};

export default Team;
