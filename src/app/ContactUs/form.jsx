import "./form.css"
export default function ContactForm(){

	return (
		<div className = "ContactForm_Container">
			<form style={{ height: "100% !important" }}>

				<div className = "Input_Row">
					<div className= "Input_Option">
						<p>First Name</p>
						<input className = "TrasparentInput" type = "text"/>
					</div>

					<div className= "Input_Option">
						<p>Second Name</p>
						<input className = "TrasparentInput" type = "text"/>
					</div>
				</div>
				<br/><br/>
				<div className = "Input_Row">
					<div className= "Input_Option">
						<p>Email</p>
						<input className = "TrasparentInput" type = "email"/>
					</div>

					<div className= "Input_Option">
						<p>Phone Number</p>
						<input className = "TrasparentInput" type = "number"/>
					</div>
				</div>
				<br/><br/>
				<h6 style = {{fontWeight:"bold", textAlign:"left"}}>Select One of the Options</h6>
				<br/>
				<div className = "Input_Row">
					<div className="radio-group">
					  <label className="radio-option">
					    <input type="radio" name="choice" value="option1" />
					    <span className="custom-radio"></span>
					    Option 1
					  </label>

					  <label className="radio-option">
					    <input type="radio" name="choice" value="option2" />
					    <span className="custom-radio"></span>
					    Option 2
					  </label>

					  <label className="radio-option">
					    <input type="radio" name="choice" value="option3" />
					    <span className="custom-radio"></span>
					    Option 3
					  </label>

					  <label className="radio-option">
					    <input type="radio" name="choice" value="option4" />
					    <span className="custom-radio"></span>
					    Option 4
					  </label>
					</div>

				</div>
				<br/><br/>
				<div className= "Input_Option">
						<p>Message</p>
						<input className = "TrasparentInput" type = "text area"/>
				</div>
				<br/>
				<input className = "ppmmmoonn" type = "submit"/>
			</form>
		</div>







		);



}