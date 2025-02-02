import '@/styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
	title: 'Regent Street Church',
	description: 'Official website of Regent Street Presbyterian Church',
};

export default function RootLayout({ children }) {
	return (
		<html data-theme='cupcake' lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>{metadata.title}</title>
			</head>
			<body className='antialiased'>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
