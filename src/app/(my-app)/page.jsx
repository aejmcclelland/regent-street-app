import Hero from "../../components/Hero";
import Sundays from "../../components/Sundays";
import FindUs from "../../components/FindUs";
import Welcome from "../../components/Welcome";
import About from "../../components/About";


export default function Home() {
	const heroImages = [
		{
			src: "https://res.cloudinary.com/dqeszgo28/image/upload/t_sundays/v1742659729/regentStreetChurch/church_service_dlllqn.jpg",
			alt: "Hero Image 1",
			caption: "Welcome to Regent Street Presbyterian Church",
		},
		{
			src: "https://res.cloudinary.com/dqeszgo28/image/upload/t_sundays/v1738409534/regentStreetChurch/praise02_sample.jpg",
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
		<div className='bg-base-200' >
			<Hero images={heroImages} />
			<Sundays />
			<Welcome />
			<About />
			<FindUs />
		</div>
	);
}