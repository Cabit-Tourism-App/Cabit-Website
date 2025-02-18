
import "./BookForm.css"; // Import the separate CSS file

export default function BookForm() {
  return (
    <div className="book-form-container">
      <div className="glass-card p-4">
        <h2 className="text-center mb-3">Book Your Ride</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Enter Location" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Enter Destination" />
          </div>
          <div className="d-flex gap-2 mb-3">
            <input className="form-control" type="date" />
            <select className="form-control">
              <option>Language</option>
            </select>
          </div>
          <button type="button" className="btn btn-warning w-100">See Prices</button>
        </form>
      </div>

      {/* Car Options */}
      <div className="glass-card mt-4">
        <div className="p-3">
          {["Mini", "Prime Sedan", "Prime SUV"].map((car, index) => (
            <div key={index} className="d-flex align-items-center justify-content-between car-option">
              <div className="d-flex align-items-center">
                <img src="https://placehold.co/50x50" alt={`${car} car`} className="rounded-circle me-3"/>
                <div>
                  <h5 className="mb-0">{car}</h5>
                  <small className="text-muted">
                    {car === "Mini" ? "Comfy, economical cars" :
                     car === "Prime Sedan" ? "Spacious sedans, top drivers" :
                     "Spacious SUVs"}
                  </small>
                </div>
              </div>
              <div>
                <h5 className="mb-0">$20</h5>
                <small className="text-muted">2 min</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
