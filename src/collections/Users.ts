import type { CollectionConfig } from 'payload';
import type { UserWithRoles } from '../types'; // Ensure this is correctly imported

export const Users: CollectionConfig = {
	slug: 'users',
	admin: {
		useAsTitle: 'email',
	},
	auth: true,
	access: {
		read: () => true,
		create: () => true,
		update: ({ req }) => {
			const user = req.user as UserWithRoles;
			return (
				user?.roles?.includes('admin') ||
				user?.roles?.includes('superadmin') ||
				false
			);
		},
		delete: ({ req }) => {
			const user = req.user as UserWithRoles;
			return user?.roles?.includes('superadmin') || false;
		},
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
