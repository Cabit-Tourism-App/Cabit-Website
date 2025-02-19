import ImageBox from "../../components/ImageBox.jsx";
import "./page.css"
import {NavBarNormal} from "../../components/Navbar.jsx"
import BookForm from "./BookForm.jsx"
export default function CabBook() {
    return (
    	<div className="container-m">
            <NavBarNormal/>
            {/* Main Content */}
				<div className="Normal_Page_Background">
					<div className = "row">
						<div className = "col-1"></div>
							<div className = "col-10">
								<div className = "WhiteCard">
									<div className = "row">
										<div className = "col-6"><BookForm/></div>
										<div className = "col-6" style = {{ borderLeft:"1px solid #444"}}><ImageBox width = "85vh"/></div>
									</div>
								</div>
							</div>
						<div className = "col-1"></div>
					</div>
				</div>
		</div>
    );
}