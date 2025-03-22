import { CollectionConfig } from 'payload';
import { isSuperAdmin } from '../access/adminAccess'; // Ensure this function exists
import type { UserWithRoles } from '@/types'; // Ensure this is correctly imported

export const Youth: CollectionConfig = {
	slug: 'youth',
	labels: { singular: 'Youth', plural: 'Youth' },
	access: {
		read: () => true, // Everyone can read
		create: ({ req }) => isSuperAdmin({ req }), // Only Superadmins can create
		update: ({ req }) => {
			if (!req.user) return false;

			const user = req.user as UserWithRoles; // Ensure correct typing

			// Superadmins can edit everything
			if (isSuperAdmin({ req })) return true;

			// Admins can edit only their assigned youth group
			if (user.roles?.includes('admin')) {
				return {
					$or: [
						{
							category: { equals: 'Quest' },
							leaderId: { in: [user.id.toString()] },
						},
						{
							category: { equals: 'Scouts' },
							leaderId: { in: [user.id.toString()] },
						},
						{
							category: { equals: 'Guides' },
							leaderId: { in: [user.id.toString()] },
						},
						{
							category: { equals: 'Youth Club' },
							leaderId: { in: [user.id.toString()] },
						},
					],
				};
			}

			return false; // Deny access by default
		},
		delete: ({ req }) => isSuperAdmin({ req }), // Only Superadmins can delete
	},
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'description', type: 'richText' },
		{ name: 'date', type: 'date' },
		{
			name: 'category',
			type: 'select',
			options: ['Quest', 'Scouts', 'Guides', 'Youth Club'],
			required: true,
		},
		{
			name: 'leaderId',
			type: 'relationship',
			relationTo: 'users',
			required: false,
			hasMany: true, // Allows multiple leaders per group
		},
	],
};

export default Youth;
