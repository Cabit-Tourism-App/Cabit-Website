import "./page.css";

//elements
import CarousaL from "../components/Carousal.jsx";
import {ImageCards} from "../components/GeneralCards.jsx";
import Pt from "../components/try";
import Link from "next/link";
import ImageBox from "../components/ImageBox";
import {NavBarHome} from "../components/Navbar.jsx"
import SearchBar from "../components/SearchBar.jsx"


export default function Home() {
	return (
		<div className="container-m">
            <NavBarHome/>

            {/* Main Content */}
            <div className="Content">
				<div>
					<CarousaL />

					<div className="Home_Page_Background">
						<div className="Home_Page_Content">
							<div className="row">
								<h1>What We Offer</h1>
							</div>
							<br />
							<div className="row">
								<div className="Flex_Row">
									<ImageCards width="50vh" height="70vh" />
									<ImageCards width="50vh" height="70vh" />
									<ImageCards width="50vh" height="70vh" />
									<ImageCards width="50vh" height="70vh" />
								</div>
							</div>
							<br />
							<br />
							<br />
							<br />

							<div className="row">
								<div className="col-1"></div>
								<div className="col-5" style={{ textAlign: "left" }}>
									<h1>In 3 Easy Steps</h1>
									<br />

									<div className="Flex_Row">
										<div className="col-1">{/*Space for Image*/}</div>
										<div className="col-10">
											<h3>Choose Destination</h3>
											<p>Select your desired travel destination and customize your itinerary.</p>
										</div>
									</div>
									<br />

									<div className="Flex_Row">
										<div className="col-1">{/*Space for Image*/}</div>
										<div className="col-10">
											<h3>Make Payment</h3>
											<p>Securely complete your payment for the trip and cab services.</p>
										</div>
									</div>

									<div className="Flex_Row">
										<div className="col-1">{/*Space for Image*/}</div>
										<div className="col-10">
											<h3>Reach Airport on selected day</h3>
											<p>Arrive at the airport on your selected date and start your journey!</p>
										</div>
									</div>
								</div>
								<div className="col-5">
										{/*An introductory video...*/}
									<ImageBox/>
								</div>
								<div className="col-1"></div>

							</div>
							<br />
							<br />
							<br />
							<br />
							<div className = "row">{/*A MultiBock Carousal*/}

							</div>
							<br />
							<br />
							<br />
							<br />

						</div>
					</div>
					
				</div>
			</div>
        </div>
	);
}
