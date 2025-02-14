import type { Access } from 'payload';

// Define the Admin user type
type AdminUser = {
	id: string;
	email: string;
	role: 'admin' | 'editor' | 'superadmin';
	collection: 'admins';
};

// Type guard to check if req.user is an Admin
const isAdminUser = (user: any): user is AdminUser => {
	return user?.collection === 'admins' && typeof user.role === 'string';
};

// ✅ Superadmins & Admins can create, read, update
export const isSuperAdminOrAdmin: Access = ({ req }) => {
	return (
		isAdminUser(req.user) &&
		(req.user.role === 'superadmin' || req.user.role === 'admin')
	);
};

// ✅ Admins, Editors, and Superadmins
export const isAdminOrEditor: Access = ({ req }) => {
	return (
		isAdminUser(req.user) &&
		(req.user.role === 'admin' ||
			req.user.role === 'editor' ||
			req.user.role === 'superadmin')
	);
};

// ✅ Superadmins only
export const isSuperAdmin: Access = ({ req }) => {
	return isAdminUser(req.user) && req.user.role === 'superadmin';
};

// ✅ Prevents deleting the last Super Admin
export const canDeleteAdmin: Access = async ({ req, id }) => {
	if (!id) {
		return true;
	}

	// Ensure user attempting to delete is at least an admin
	if (!isAdminUser(req.user) || req.user.role === 'editor') {
		return false;
	}

	// Check how many superadmins exist
	const { totalDocs } = await req.payload.find({
		collection: 'admins',
		where: { role: { equals: 'superadmin' } },
		limit: 1,
	});

	// ✅ Superadmin can delete anyone (except last superadmin)
	if (req.user.role === 'superadmin') {
		return totalDocs > 1 || id !== req.user.id;
	}

	// ✅ Admin can only delete other admins & editors, NOT superadmins
	if (req.user.role === 'admin') {
		const targetAdmin = await req.payload.findByID({
			collection: 'admins',
			id,
		});

		// Prevent deleting superadmin
		return targetAdmin?.role !== 'superadmin';
	}

	return false;
};
