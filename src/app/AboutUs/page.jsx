import "./page.css"
import CarousaL from "../../components/Carousal.jsx"
import AboutCard from "../../components/aboutcard.jsx";
import AboutCardrev from "../../components/aboutcardrev.jsx";

export default function AboutUs() {
	return (
		<div>
			<div>
				<CarousaL />
			</div>
			<div className="Home_Page_Background">
				<AboutCardrev heading="Our Mission:Our mission is to make exploring India effortless" para="Our mission is to make exploring India effortless by providing personalized travel planning, seamless transportation, and tools to overcome language barriers. We aim to ensure every traveler has a smooth, enjoyable, and unforgettable experience." imgsrc="/images/ourmission.jpg" />
				<AboutCard heading="Why Choose Us?" para="Effortlessly plan your journey with personalized itineraries tailored to your preferences.Enjoy seamless cab services with drivers who speak your language. Explore India stress-free with tools designed to make travel simple and enjoyable." imgsrc="/images/whychooseus.jpg" />
				<AboutCardrev heading="Overcoming Language Barriers" para="Break language barriers with multilingual cab drivers for smooth communication.Use our in-app translation tools to navigate local interactions effortlessly.Enjoy a stress-free travel experience anywhere in India." imgsrc="/images/overcominglanguage.jpg" />

			</div>
		</div>
	);
}