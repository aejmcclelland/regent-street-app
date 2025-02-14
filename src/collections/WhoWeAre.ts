import type { CollectionConfig } from 'payload';
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	isSuperAdmin,
} from '../access/adminAccess';

export const WhoWeAre: CollectionConfig = {
	slug: 'who-we-are',
	labels: {
		singular: 'Who We Are',
		plural: 'Who We Are',
	},
	access: {
		read: () => true,
		create: isSuperAdminOrAdmin,
		update: isAdminOrEditor,
		delete: isSuperAdmin,
	},
	fields: [
		{ name: 'title', type: 'text', required: true },
		{ name: 'description', type: 'richText' },
	],
};

export default WhoWeAre;
