import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import Admins from './collections/Admins';
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { WhoWeAre } from './collections/WhoWeAre';
import { Youth } from './collections/Youth';
import OurHistory from './collections/OurHistory';
import Team from './collections/Team';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		user: 'admins',
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Admins, Users, Media, WhoWeAre, Youth, OurHistory, Team],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || '',
	typescript: {
		outputFile: path.resolve(dirname, 'payload-types.ts'),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || '',
	}),
	sharp,
	plugins: [],
});
