import type { CollectionConfig } from 'payload';
import { isAdminOrEditor, isSuperAdmin } from '../access/adminAccess';

const Team: CollectionConfig = {
	slug: 'team',
	labels: {
		singular: 'Team Member',
		plural: 'Team Members',
	},
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true, // ✅ Everyone can read
		create: isAdminOrEditor,
		update: isAdminOrEditor,
		delete: isSuperAdmin,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
		},
		{
			name: 'role',
			type: 'text',
			required: true,
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'media', // ✅ Assumes you have a 'media' collection for image uploads
			required: false, // Not required since some have placeholders
		},
		{
			name: 'bio',
			type: 'richText', // ✅ Allows formatting options
			required: true,
		},
		{
			name: 'email',
			type: 'email',
			required: false, // ✅ Optional for contacts like Child Protection Officer
		},
	],
};

export default Team;
