import "./page.css";

export default function Form({ onSubmit }) {
  return (
    <div className="WhereTo">
      <div className="row">
        <h1>Plan a New Trip</h1>
      </div>
      <br />
      
        <form onSubmit={(e) => {
		        e.preventDefault();
		        onSubmit();
		      }}>
        	<div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
	          <div className="LargeFormInputs">
	            <div className="LargeFormInputsBox">
	              <label>Where To</label>
	              <input type="text" placeholder="Place you wanna go" />
	            </div>
	            <div className="row">
		            <div className="col-3">
		              <div className="LargeFormInputsBox">
		                <label>Start Date</label>
		                <input type="date" />
		              </div>
		            </div>
		            <div className="col-3">
		              <div className="LargeFormInputsBox">
		                <label>End Date</label>
		                <input type="date" />
		              </div>
		            </div>
		            <div className="col-6">
		              <div className="LargeFormInputsBox">
		                <label>Invite Email</label>
		                <input type="email" placeholder="Enter email to invite" />
		              </div>
		            </div>
		            </div>
		        </div>
        	</div>
        	<br/>
        	<br/>
        	<div className="row">
        		<div className="col-3"></div>
        		<div className="col-6">
        		<input className = "StartPlanning" type="submit" value="Start Planning"/>
        		</div>
        		<div className="col-3"></div>
        	</div>
        </form>
      
 	</div>
  );
}
