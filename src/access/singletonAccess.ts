import type { Access } from 'payload';
import type { UserWithRoles } from '@/types';

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
		const isAllowedEmail = user.email && allowedEmails.includes(user.email);

		if (!isSuperadmin && !isAllowedEmail) return false;

		// ✅ Use req.payload instead of global payload
		const { docs } = await req.payload.find({ collection: collectionSlug });
		return docs.length === 0;
	},

	update: ({ req }) => {
		const user = req.user as UserWithRoles;
		const isSuperadmin = user?.roles?.includes('superadmin');
		const isAllowedEmail = user?.email && allowedEmails.includes(user.email);
		return isSuperadmin || isAllowedEmail || false;
	},

	delete: ({ req }) => {
		const user = req.user as UserWithRoles;
		return user?.roles?.includes('superadmin') || false;
	},
});
