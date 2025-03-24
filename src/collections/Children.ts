import type { CollectionConfig } from 'payload';
import { isSuperAdmin } from '../access/adminAccess';
import { isSuperAdminOnly } from '@/access/isSuperAdminOnly';

export const Children: CollectionConfig = {
	slug: 'children',
	labels: {
		singular: "Children's Group",
		plural: "Children's Groups",
	},
	admin: {
		useAsTitle: 'name',
		hidden: ({ user }) => !isSuperAdminOnly({ roles: user?.roles }),
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
			name: 'banner',
			type: 'upload',
			relationTo: 'media',
			required: false,
			admin: {
				position: 'sidebar',
			},
		},
		{
			name: 'positionOrder',
			type: 'number',
			required: false,
			admin: {
				position: 'sidebar',
				description:
					'Set the display order of cards on the Children’s Ministry page.',
			},
		},
		{
			name: 'linkedPage',
			type: 'relationship',
			relationTo: [
				'firstFriends',
				'holidayBibleClub',
				'sundaySchool',
				'scouts',
				'guides',
				'rainbows',
				'brownies',
				'beavers',
				'cubs',
				'squirrels',
				'quest',
			] as const,
			required: false,
		},
	],
};
