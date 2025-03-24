// src/access/singletonAccess.ts
import type { Access } from 'payload';
import type { UserWithRoles } from '@/types';
import payload from 'payload';

export const singletonAccess = (
	collectionSlug: string,
	allowedEmails: string[] = []
): {
	read: Access;
	create: Access;
	update: Access;
	delete: Access;
} => ({
	read: () => true,

	create: async ({ req }) => {
		const user = req.user as UserWithRoles;
		if (!user) return false;

		const isSuperadmin = user.roles?.includes('superadmin');
		const isAllowedEmail = !!user.email && allowedEmails.includes(user.email);

		if (!isSuperadmin && !isAllowedEmail) return false;

		const { docs } = await payload.find({ collection: collectionSlug });
		return docs.length === 0;
	},

	update: ({ req }) => {
		const user = req.user as UserWithRoles;
		if (!user) return false;

		const isSuperadmin = user.roles?.includes('superadmin');
		const isAllowedEmail = !!user.email && allowedEmails.includes(user.email);

		return isSuperadmin || isAllowedEmail;
	},

	delete: ({ req }) => {
		const user = req.user as UserWithRoles;
		return !!user?.roles?.includes('superadmin'); // ensure boolean
	},
});
