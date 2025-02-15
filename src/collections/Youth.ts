import type { CollectionConfig } from 'payload';
console.log('✅ Youth collection loaded successfully.');
import {
	isAdminOrEditor,
	isSuperAdminOrAdmin,
	isSuperAdmin,
} from '../access/adminAccess';

export const Youth: CollectionConfig = {
	slug: 'youth',
	admin: {
		preview: (doc: Record<string, unknown>) => {
			if (!doc?.slug) return null;
			const baseUrl =
				process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
			return `${baseUrl}/whats-on/youth/${doc.slug}`;
		},
	},
	labels: {
		singular: 'Youth',
		plural: 'Youth',
	},
	access: {
		read: () => true, // ✅ Anyone can read
		create: async ({ req }) => {
			// ✅ Prevent creating more than one entry
			const existing = await req.payload.find({
				collection: 'youth',
				limit: 1,
			});
			return existing.totalDocs === 0; // ✅ Allow creation only if no entry exists
		},
		update: ({ req }) => {
			// ✅ Only SuperAdmins, Admins, or Editors can update
			if (!req.user) return false;
			return (
				req.user.collection === 'admins' &&
				['superadmin', 'admin', 'editor'].includes(req.user.role)
			);
		},
		delete: () => false, // ✅ Prevent deletion
	},
	fields: [
		{ name: 'title', type: 'text', required: true },
		{
			name: 'slug',
			type: 'text',
			required: true,
			unique: true,
			admin: {
				description: 'Leave empty to auto-generate from title',
			},
			hooks: {
				beforeValidate: [
					({ data, value }) => {
						// Allow manually entered slug
						if (value) return value.trim();

						// Auto-generate slug from title if empty
						if (data?.title) {
							return data.title
								.toLowerCase()
								.trim()
								.replace(/\s+/g, '-') // Convert spaces to hyphens
								.replace(/[^a-z0-9-]/g, ''); // Remove special characters
						}
						return value; // Default fallback
					},
				],
			},
		},
		{ name: 'content', type: 'richText' },
	],
};

export default Youth;
