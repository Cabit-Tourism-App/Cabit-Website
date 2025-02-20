export default function form(){

	return (<form className="mt-4">
              
              {/* Destination Input */}
              <div className="form-group text-start">
                <label className="fw-bolder text-muted">What do you want to explore?</label>
                <input className="form-control mb-3" placeholder="Departing from" type="text" />
                <input className="form-control mb-3" placeholder="Search destination" type="text" />
              </div>

              {/* Date Picker */}
              <div className="form-group text-start">
                <label className="fw-bolder text-muted">When are you planning to travel?</label>
                <div className="date-picker">
                  <div>
                    <label className="fw-bolder text-muted">Start date</label>
                    <input className="form-control mb-3" type="date" />
                  </div>
                  <div>
                    <label className="fw-bolder text-muted">End date</label>
                    <input className="form-control mb-3" type="date" />
                  </div>
                </div>
              </div>

              <a className="text-muted small d-block mb-3" href="#">Not sure? Let us decide the best time for your trip.</a>
              <button className="btn btn-warning w-100 fw-bolder">Continue</button>
            </form>);
}