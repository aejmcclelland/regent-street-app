import type { CollectionConfig } from 'payload';
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	isSuperAdmin,
} from '../access/adminAccess';

export const WhoWeAre: CollectionConfig = {
	slug: 'who-we-are',
	labels: {
		singular: 'Team Member',
		plural: 'Team Members',
	},
	admin: {
		useAsTitle: 'name', // ✅ Display names in admin panel
	},
	access: {
		read: () => true, // ✅ Publicly readable
		create: isSuperAdminOrAdmin, // ✅ Only Admins can create
		update: isAdminOrEditor, // ✅ Admins & Editors can update
		delete: isSuperAdmin, // ✅ Only Super Admins can delete
	},
	fields: [
		{ name: 'name', type: 'text', required: true },
		{ name: 'role', type: 'text', required: true },
		{
			name: 'image',
			label: 'Profile Image',
			type: 'upload',
			relationTo: 'media', // ✅ Ensure media collection exists
			required: false,
		},
		{ name: 'bio', type: 'richText', required: true },
		{
			name: 'email',
			type: 'email',
			required: false,
			admin: {
				description: 'Optional: Display email for contact purposes',
			},
		},
	],
};

export default WhoWeAre;
