import Hero from '@/components/Hero';

export default function Home() {
	const heroImages = [
		{
			src: '/images/group-game.jpg',
			alt: 'Hero Image 1',
			caption: 'Welcome to Regent Street Presbyterian Church',
		},
		{
			src: '/images/group-play.jpg',
			alt: 'Hero Image 2',
			caption: 'Join Us Every Sunday',
		},
		{
			src: '/images/group-stage.jpg',
			alt: 'Hero Image 3',
			caption: 'A Community That Cares',
		},
	];
	return (
		<div>
			<Hero images={heroImages} />
			<h1>Home</h1>
		</div>
	);
}
