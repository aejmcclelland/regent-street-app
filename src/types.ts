import { User as PayloadUser } from 'payload';

export interface UserWithRoles extends PayloadUser {
	roles?: ('user' | 'admin' | 'superadmin')[];
}
