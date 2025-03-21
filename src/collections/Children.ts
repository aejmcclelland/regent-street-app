import type { CollectionConfig } from 'payload';
import { isSuperAdmin } from '../access/adminAccess';

export const Children: CollectionConfig = {
	slug: 'children',
	labels: {
		singular: "Children's Group",
		plural: "Children's Groups",
	},
	admin: {
		useAsTitle: 'name',
	},
	access: {
		read: () => true,
		create: isSuperAdmin,
		update: isSuperAdmin,
		delete: isSuperAdmin,
	},
	fields: [
		{ name: 'name', type: 'text', required: true },
		{ name: 'description', type: 'textarea', required: true },
		{ name: 'image', type: 'upload', relationTo: 'media', required: false },
		{ name: 'slug', type: 'text', required: true },
		{
			name: 'linkedPage',
			type: 'relationship',
			relationTo: [
				'firstFriends',
				'holidayBibleClub',
				'sundaySchool',
				'scouts',
				'guides',
			] as const,
			required: false,
		},
	],
};
