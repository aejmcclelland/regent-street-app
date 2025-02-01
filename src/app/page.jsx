import Hero from '../components/Hero';

export default function Home() {
	const heroImages = [
		{
			src: 'regentStreetChurch/prayer_sample.jpg',
			alt: 'Hero Image 1',
			caption: 'Welcome to Regent Street Presbyterian Church',
		},
		{
			src: 'regentStreetChurch/praise_sample.jpg',
			alt: 'Hero Image 2',
			caption: 'Join Us Every Sunday',
		},
		{
			src: 'regentStreetChurch/church_praise.jpg',
			alt: 'Hero Image 3',
			caption: 'A Community That Cares',
		},
	];
	return (
		<div>
			<Hero images={heroImages} />
			<section className="mt-10 text-center px-4">
				<h1 className="text-2xl font-bold text-gray-800">
					Welcome to Regent Street Presbyterian Church
				</h1>
				<p className="mt-2 text-gray-600">
					Join us this Sunday to experience fellowship, worship, and community.
				</p>
				<a
					href="/about"
					className="mt-4 inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-focus transition"
				>
					Learn More
				</a>
			</section>

			{/* Additional church info */}
			<section className="mt-10 px-4 max-w-3xl mx-auto">
				<h2 className="text-xl font-semibold text-gray-800">About Our Church</h2>
				<p className="mt-2 text-gray-600">
					Regent Street Presbyterian Church is a place of faith, fellowship, and service.
					We welcome everyone to join us in worship and community activities.
				</p>
			</section>
		</div>
	);
}
