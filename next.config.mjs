import 'dotenv/config';
import { withPayload } from '@payloadcms/next/withPayload';
import 'dotenv/config';
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: false,
	},
	env: {
		NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
		DATABASE_URI: process.env.DATABASE_URI,
		PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/api/media/file/**',
			},
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/media/**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
	},
};

export default withPayload(nextConfig);
