import "./share.css"
export default function ShareSlide(){
	return (
		<div className = "container">
		<div className = "ShareContainer">
			<div className = "row">
				<h3 style = {{fontWeight:"bold"}}>Contact Information</h3>
			</div>
			<br/>
			<div className = "row">
				<p className = "text-mute">Email:- xyz@gmail.com</p>
				<p className = "text-mute">Contact:- 0123456789</p>
			</div>
			<br/>

			<div className="row">
				<img src="/images/CabitImage.png" style={{ width: "90%" }} />


			</div>
			<div className = "SocialRow">
				<img src = "icon/insta.png" style={{ width: "50px" }}/>
				<img src = "icon/linkedin.png" style={{ width: "50px" }}/>
				<img src = "icon/social.png" style={{ width: "50px" }}/>
				<img src = "icon/twitter.png" style={{ width: "50px" }}/>
			</div>
			<br/>
			<br/>


		</div>
		</div>)
}