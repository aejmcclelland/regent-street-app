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
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true,
			admin: {
				position: 'sidebar',
				description: 'Used in the URL to reference this Sunday entry (e.g., "this-sunday")',
			},
		},
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
		{
			name: 'youtubeVideoId',
			type: 'text',
			label: 'YouTube Video ID',
			required: false,
			admin: {
				description:
					'Paste the video ID from the YouTube URL (e.g., "dQw4w9WgXcQ")',
			},
		},
	],
};

export default Sundays;
