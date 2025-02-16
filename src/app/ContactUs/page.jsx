import "./page.css"
import CarousaL from "../../components/Carousal.jsx"
import AboutCard from "../../components/aboutcard.jsx";
import AboutCardrev from "../../components/aboutcardrev.jsx";
import {NavBarNormal} from "../../components/Navbar.jsx"

export default function AboutUs() {
	return (
		<div>
			<NavBarNormal/>
			<div className="container-m">
	            {/* Main Content */}
	            <div className="Content">
					<div>
						<div className="Normal_Page_Background">
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}