import { CollectionConfig } from 'payload';
import { isSuperAdmin } from '../access/adminAccess';
import { isSuperAdminOnly } from '@/access/isSuperAdminOnly';

export const Sundays: CollectionConfig = {
	slug: 'sundays',
	labels: { singular: 'Sunday', plural: 'Sundays' },
	admin: {
		useAsTitle: 'title',
		hidden: ({ user }) => !isSuperAdminOnly({ roles: user?.roles }),
	},
	access: {
		read: () => true,
		create: isSuperAdmin,
		update: isSuperAdmin,
		delete: isSuperAdmin,
	},
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'date', type: 'date', required: true },
		{ name: 'description', type: 'richText' },
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

export default Sundays;
