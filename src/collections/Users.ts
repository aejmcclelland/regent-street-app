import type { CollectionConfig } from 'payload';
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	canDeleteAdmin,
} from '@/access/adminAccess';

export const Users: CollectionConfig = {
	slug: 'users',
	admin: {
		useAsTitle: 'email',
	},
	auth: true,

	access: {
		read: isAdminOrEditor,
		create: isSuperAdminOrAdmin,
		update: isSuperAdminOrAdmin,
		delete: canDeleteAdmin,
	},
	fields: [
		{
			name: 'roles',
			type: 'select',
			required: true,
			hasMany: true,
			options: [
				{ label: 'User', value: 'user' },
				{ label: 'Admin', value: 'admin' },
				{ label: 'Super Admin', value: 'superadmin' },
			],
			defaultValue: ['user'],
		},
	],
};

export default Users;
