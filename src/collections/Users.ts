import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
	slug: 'users',
	auth: true, // ✅ Enables authentication
	admin: {
		useAsTitle: 'email',
	},
	fields: [
		{
			name: 'firstName',
			type: 'text',
			required: true,
		},
		{
			name: 'lastName',
			type: 'text',
			required: true,
		},
	],
};

export default Users;
