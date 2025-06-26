import type { CollectionConfig } from 'payload';
import { isSuperAdminOnly } from '@/access/isSuperAdminOnly';
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	isSuperAdmin,
} from '../access/adminAccess';

export const StreetPastors: CollectionConfig = {
	slug: 'street-pastors',
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
	labels: {
		singular: 'Street Pastor',
		plural: 'Street Pastors',
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
		},
		{
			name: 'bannerImage',
			type: 'upload',
			relationTo: 'media', // Assumes you have a 'media' collection for images
			required: true,
		},
		{
			name: 'introText',
			type: 'textarea',
			required: true,
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

export default StreetPastors;
