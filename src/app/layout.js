import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['400', '600', '700', '900'],
	subsets: ['latin'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-poppins',
});

export const metadata = {
	title: 'Regent Street Church',
	description: 'Official website of Regent Street Presbyterian Church',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' data-theme='cupcake' className={`${poppins.variable}`}>
			<body className='antialiased'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
