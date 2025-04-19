// src/app/api/route.ts
import { nextjsRouteHandler } from '@payloadcms/next/route-handler';
import config from '@payload-config';

export const { GET, POST, PUT, DELETE } = nextjsRouteHandler({
	config,
});
