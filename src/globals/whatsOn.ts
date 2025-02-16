import { GlobalConfig } from 'payload';

export const WhatsOn: GlobalConfig = {
	slug: 'whats-on',
	label: "What's On",
	access: {
		read: () => true,
		update: ({ req }) =>
			!!(req.user && 'role' in req.user && req.user.role === 'admin'),
	},
	fields: [
		{
			name: 'heroBanner',
			type: 'upload',
			relationTo: 'media',
			required: false,
		},
		{
			name: 'introText',
			type: 'richText',
			required: true,
		},
		{
			name: 'youthContent',
			type: 'relationship',
			relationTo: 'youth',
			required: false,
		},
		{
			name: 'sundaysContent',
			type: 'relationship',
			relationTo: 'sundays',
			required: false,
		},
		{
			name: 'kidsContent',
			type: 'relationship',
			relationTo: 'kids',
			required: false,
		},
	],
};

export default WhatsOn;