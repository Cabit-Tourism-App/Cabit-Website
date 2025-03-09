import "./page.css";

//elements
import CarousaL from "../components/Carousal.jsx";
import {ImageCards} from "../components/GeneralCards.jsx";
import Homepage from "./Homepage/page";
import Link from "next/link";
import ImageBox from "../components/ImageBox";
import {NavBarHome} from "../components/Navbar.jsx"
import SearchBar from "../components/SearchBar.jsx"
import Visting_page from "./VisitingPlaces/page";

export default function Home() {
	return (
		<div className="container-m">
            <NavBarHome/>
			

            {/* Main Content */}
            <div className="Content">
				<div>
					<CarousaL/>
					<Homepage/>
					
					

					
					</div>
				</div>
			</div>

	);
}
