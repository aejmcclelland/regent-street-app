import type { CollectionConfig } from 'payload';
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	isSuperAdmin,
} from '../access/adminAccess';

export const Youth: CollectionConfig = {
	slug: 'youth',
	labels: {
		singular: 'Youth',
		plural: 'Youth',
	},
	access: {
		read: () => true,
		create: ({ req }) =>
			isSuperAdminOrAdmin({ req }) || isAdminOrEditor({ req }),
		update: isAdminOrEditor,
		delete: isSuperAdmin,
	},
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'content', type: 'richText' },
	],
};

export default Youth;
