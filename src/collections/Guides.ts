import type { CollectionConfig } from 'payload';
import type { UserWithRoles } from '@/types'; // Ensure this is correctly imported
import { isSuperAdminOrAdmin, isSuperAdmin } from '../access/adminAccess';

export const Guides: CollectionConfig = {
	slug: 'guides',
	labels: {
		singular: 'Guide',
		plural: 'Guides',
	},
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true, // Everyone can view
		create: isSuperAdminOrAdmin, // Only superadmins can create new groups
		update: ({ req }) => {
			if (!req.user) return false;
			const user = req.user as UserWithRoles;
			if (isSuperAdmin({ req })) return true;
			if (user.roles?.includes('admin')) {
				return {
					$or: [{ leaderId: { in: [user.id] } }],
				};
			}
			return false;
		},
		delete: isSuperAdmin, // Superadmins only
	},
	fields: [
		{ name: 'name', type: 'text', required: true },
		{ name: 'description', type: 'textarea', required: true },
		{ name: 'image', type: 'upload', relationTo: 'media', required: false },
		{ name: 'slug', type: 'text', required: true },
		{
			name: 'leaderId',
			type: 'relationship',
			relationTo: 'users',
			required: false,
			hasMany: true,
		},
		{
			name: 'subgroups',
			type: 'array',
			fields: [
				{ name: 'title', type: 'text', required: true },
				{ name: 'slug', type: 'text', required: true },
				{ name: 'image', type: 'upload', relationTo: 'media', required: true },
			],
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
