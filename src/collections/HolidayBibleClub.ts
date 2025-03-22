import type { CollectionConfig } from 'payload';
import type { UserWithRoles } from '@/types'; // Ensure this is correctly imported
import { isSuperAdminOrAdmin, isSuperAdmin } from '../access/adminAccess';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const HolidayBibleClub: CollectionConfig = {
	slug: 'holidayBibleClub',
	labels: {
		singular: 'Holiday Bible Club',
		plural: 'Holiday Bible Clubs',
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
		{
			name: 'description',
			type: 'richText',
			required: true,
			editor: lexicalEditor(),
		},
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

export default HolidayBibleClub;
