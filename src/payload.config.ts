import { mongooseAdapter } from '@payloadcms/db-mongodb';
import {
	lexicalEditor,
	lexicalHTML,
	HTMLConverterFeature,
} from '@payloadcms/richtext-lexical';

import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import Admins from './collections/Admins';
import Users from './collections/Users';
import Media from './collections/Media';
import WhoWeAre from './collections/WhoWeAre';
import WhatsOn from './globals/whatsOn';
import Sundays from './collections/Sundays';
import OurHistory from './collections/OurHistory';
import Team from './collections/Team';
import Youth from './collections/Youth';
import Kids from './collections/Kids';

import Test from './collections/Test';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: 'admins',
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [
		Admins,
		Users,
		Media,
		WhoWeAre,
		Sundays,
		OurHistory,
		Team,
		Test,
		Youth,
		Kids,
	],
	globals: [WhatsOn],
	editor: lexicalEditor({
		features: ({ defaultFeatures }) => [
			...defaultFeatures,
			HTMLConverterFeature({}), // ✅ Allows conversion of rich text to JSX / HTML
		],
	}),
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || '',

		autoPluralization: false, // ✅ Disable auto-pluralization
	}),
	sharp,
	plugins: [],
});
