import { withPayload } from '@payloadcms/next/withPayload';
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: false,
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
	},
};

export default withPayload(nextConfig);
