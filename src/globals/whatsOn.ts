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
			name: 'youth',
			type: 'relationship',
			relationTo: ['youth'],
			required: false,
		},
		{
			name: 'sundays',
			type: 'relationship',
			relationTo: ['sundays'],
			required: false,
		},
		{
			name: 'children',
			type: 'relationship',
			relationTo: 'children',
			required: false,
		},
	],
};

export default WhatsOn;
