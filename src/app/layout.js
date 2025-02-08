import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
	title: 'Regent Street Church',
	description: 'Official website of Regent Street Presbyterian Church',
};

export default function RootLayout({ children }) {
	return (
		<html data-theme='cupcake' lang='en'>
			<body className='antialiased'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
