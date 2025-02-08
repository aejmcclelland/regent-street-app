import '@/styles/globals.css';
import { metadata } from './metaData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-poppins',
});

export default function RootLayout({ children }) {
	return (
		<html lang='en' data-theme='cupcake' className={`${poppins.variable}`}>
			<head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
			</head>
			<body className='antialiased'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
