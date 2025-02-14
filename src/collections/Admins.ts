import type { CollectionConfig } from 'payload';
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	isSuperAdmin,
	canDeleteAdmin,
} from '../access/adminAccess';

const Admins: CollectionConfig = {
	slug: 'admins',
	auth: true,
	admin: {
		useAsTitle: 'email',
	},
	access: {
		admin: ({ req }) => Boolean(req.user),
		read: isSuperAdminOrAdmin, // ✅ Superadmins & Admins can read
		create: isSuperAdminOrAdmin, // ✅ Superadmins & Admins can create
		update: isSuperAdminOrAdmin, // ✅ Superadmins & Admins can update
		delete: canDeleteAdmin, // ✅ Uses the function we defined
	},
	fields: [
		{
			name: 'role',
			type: 'select',
			required: true,
			options: ['admin', 'editor', 'superadmin'],
			defaultValue: 'editor',
		},
	],
};

export default Admins;
