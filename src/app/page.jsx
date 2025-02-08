import Hero from "../components/Hero";
import Sundays from "../components/Sundays";
import FindUs from "../components/FindUs";
import Welcome from "../components/Welcome";
import About from "../components/About";

export default function Home() {
	const heroImages = [
		{
			src: "regentStreetChurch/prayer_sample.jpg",
			alt: "Hero Image 1",
			caption: "Welcome to Regent Street Presbyterian Church",
		},
		{
			src: "regentStreetChurch/praise_sample.jpg",
			alt: "Hero Image 2",
			caption: "Join Us Every Sunday",
		},
		{
			src: "regentStreetChurch/church_praise.jpg",
			alt: "Hero Image 3",
			caption: "A Community That Cares",
		},
	];

	return (
		<div>
			<Hero images={heroImages} />
			<Sundays />
			<Welcome /> {/* ✅ New Component */}
			<About /> {/* ✅ New Component */}
			<FindUs />
		</div>
	);
}