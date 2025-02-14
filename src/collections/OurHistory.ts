import type { CollectionConfig } from 'payload';
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	isSuperAdmin,
} from '../access/adminAccess';

const OurHistory: CollectionConfig = {
	slug: 'our-history',
	admin: {
		useAsTitle: 'title',
	},
	access: {
		read: () => true,
		create: isSuperAdminOrAdmin,
		update: isAdminOrEditor,
		delete: isSuperAdmin,
	},
	labels: {
		singular: 'Our History',
		plural: 'Our History',
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
			name: 'milestones',
			type: 'array',
			fields: [
				{
					name: 'year',
					type: 'number',
					required: true,
				},
				{
					name: 'eventTitle',
					type: 'text',
					required: true,
				},
				{
					name: 'description',
					type: 'textarea',
					required: true,
				},
			],
		},
	],
};

export default OurHistory;
