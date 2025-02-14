
import "./page.css"
import CarousaL from "../components/Carousal.jsx"
import Cards from "../components/Cards.jsx"


export default function Home(){
	return (
		<div>
			<div>
				<CarousaL/>
			</div>
			<div className = "Home_Page_Background">
				<div className = "Home_Page_Content"> 
					<div className="row">
						<h1>What We Offer</h1>
					</div>
					<div className = "row">
						<div className = "col-6">
						<Cards/>
						</div>
						<div className = "col-6">
						<Cards/>
						</div>
					</div>
				</div>
			</div>
		</div>

		);
}