export const isSuperAdminOnly = ({ roles }: { roles?: string[] }) => {
	return Array.isArray(roles) && roles.includes('superadmin');
};
