import type { Access } from 'payload';

// Define the Admin user type
type AdminUser = {
	id: string;
	email: string;
	roles: ('admin' | 'editor' | 'superadmin')[]; // Changed from `role` to `roles` array
	collection: 'users'; // Changed from `admins` to `users`
};

// Type guard to check if req.user is an Admin
const isAdminUser = (user: any): user is AdminUser => {
	return (
		user?.collection === 'users' &&
		Array.isArray(user.roles) &&
		user.roles.length > 0
	);
};

// Superadmins & Admins can create, read, update
export const isSuperAdminOrAdmin: Access = ({ req }) => {
	return (
		isAdminUser(req.user) &&
		(req.user.roles.includes('superadmin') || req.user.roles.includes('admin'))
	);
};

// Admins, Editors, and Superadmins
export const isAdminOrEditor: Access = ({ req }) => {
	return (
		isAdminUser(req.user) &&
		(req.user.roles.includes('admin') ||
			req.user.roles.includes('editor') ||
			req.user.roles.includes('superadmin'))
	);
};

// Superadmins only
export const isSuperAdmin: Access = ({ req }) => {
	console.log('Checking Super Admin Access: ', req.user);
	return isAdminUser(req.user) && req.user.roles.includes('superadmin');
};

// Prevents deleting the last Super Admin
export const canDeleteAdmin: Access = async ({ req, id }) => {
	if (!id) {
		return true;
	}

	// Ensure user attempting to delete is at least an admin
	if (!isAdminUser(req.user) || req.user.roles.includes('editor')) {
		return false;
	}

	// Check how many superadmins exist
	const { totalDocs } = await req.payload.find({
		collection: 'users', // Changed from 'admins' to 'users'
		where: { roles: { contains: 'superadmin' } }, // Query roles array correctly
		limit: 1,
	});

	// Superadmin can delete anyone (except last superadmin)
	if (req.user.roles.includes('superadmin')) {
		return totalDocs > 1 || id !== req.user.id;
	}

	if (req.user.roles.includes('admin')) {
		const targetAdmin = (await req.payload.findByID({
			collection: 'users', // Ensure correct collection
			id,
		})) as unknown as AdminUser | null; // Convert to unknown first, then to AdminUser

		// Prevent deleting superadmin
		return targetAdmin?.roles?.includes('superadmin') === false;
	}

	return false;
};
