import 'dotenv/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import {
	BoldFeature,
	FixedToolbarFeature,
	lexicalEditor,
} from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/users';
import { Media } from './collections/Media';
import { Sundays } from './collections/Sundays';
import { OurHistory } from './collections/OurHistory';
import { Team } from './collections/Team';
import { Youth } from './collections/Youth';
import { Children } from './collections/Children';
import { FirstFriends } from './collections/FirstFriends';
import { Guides } from './collections/Guides';
import { Scouts } from './collections/Scouts';
import { HolidayBibleClub } from './collections/HolidayBibleClub';
import { SundaySchool } from './collections/SundaySchool';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [
		Users,
		Media,
		Sundays,
		OurHistory,
		Team,
		Children,
		Youth,
		FirstFriends,
		Guides,
		Scouts,
		HolidayBibleClub,
		SundaySchool,
	],
	editor: lexicalEditor({
		features: ({ defaultFeatures }) => [...defaultFeatures],
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
