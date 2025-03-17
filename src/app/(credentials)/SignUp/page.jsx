import "./page.css"
import CarousaL from "../../../components/Carousal.jsx"
import {NavBarNormal} from "../../../components/Navbar.jsx"

import {SignUpCard} from "../../../components/GeneralCards.jsx";



export default function Login() {
	return (
		<div>
		
			<div className="container-m">
	            {/* Main Content */}
	            <NavBarNormal/>
	            <div className="Content">
					<div>
						<div className="Normal_Page_Background">
							<div className="row" style = {{"marginTop":"30px",}}>
								<div className="col-1"/>
									<div className="col-5" style={{padding:"30px"}}>
										<img src="images/CabitImage.png"/>
									</div>
								<div className="col-1"/>
									<div className = "col-4">
										<SignUpCard/>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}