import { emailAccessConfig } from './emailAccessConfig';

export function shouldShowAdminCollection(
	slug: keyof typeof emailAccessConfig,
	email?: string,
	roles?: string[]
): boolean {
	const isSuperadmin = roles?.includes('superadmin');
	const allowedEmails = emailAccessConfig[slug] || [];
	return isSuperadmin || (email ? allowedEmails.includes(email) : false);
}
