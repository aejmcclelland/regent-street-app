import 'dotenv/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Sundays } from './collections/Sundays';
import { OurHistory } from './collections/OurHistory';
import { Team } from './collections/Team';
import { Youth } from './collections/Youth';
import { Children } from './collections/Children';
import { FirstFriends } from './collections/FirstFriends';
import { Guides } from './collections/Guides';
import { Scouting } from './collections/Scouting';
import { Scouts } from './collections/Scouts';
import { HolidayBibleClub } from './collections/HolidayBibleClub';
import { SundaySchool } from './collections/SundaySchool';
import { Brownies } from './collections/Brownies';
import { Rainbows } from './collections/Rainbows';
import { Beavers } from './collections/Beavers';
import { Cubs } from './collections/Cubs';
import { Squirrels } from './collections/Squirrels';
import { Quest } from './collections/Quest';
import { FieldsOfLife } from './collections/FieldsOfLife';
import { Organisations } from './collections/Organisations';
import { StreetPastors } from './collections/StreetPastors';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
	admin: {
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
		autoLogin: process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === 'true'
			? {}
			: false,

		meta: {
			// icons: [
			// 	{
			// 		rel: 'icon',
			// 		type: 'image/png',
			// 		url: '/rs-logo.png',
			// 	},
			// 	{
			// 		rel: 'apple-touch-icon',
			// 		type: 'image/png',
			// 		url: '/apple-touch-icon.png',
			// 	},
			// ],
		},
	},
	collections: [
		Users,
		Media,
		Scouts,
		Sundays,
		FieldsOfLife,
		Quest,
		OurHistory,
		Team,
		Children,
		Youth,
		FirstFriends,
		Guides,
		Scouting,
		HolidayBibleClub,
		SundaySchool,
		Brownies,
		Rainbows,
		Beavers,
		Cubs,
		Squirrels,
		Organisations,
		StreetPastors,
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

		autoPluralization: false, // ady Disable auto-pluralization
	}),
	sharp,
	plugins: [],
});
