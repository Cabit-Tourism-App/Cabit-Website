export default function CabBook() {
    return (
        <div className="bg-white border border-secondary shadow-sm w-60 mx-auto p-3" style={{ opacity: 0.8 }}>
            <div className="row">
                <div className="col-lg-6">
                    {/* Header Section */}
                    <div className="header">
                        <h1 className="display-4 font-weight-bold text-black mb-4 text-start">BOOK YOUR CAB NOW</h1>
                        <p className="lead text-gray-700 mb-4 text-start">Add your trip details,</p>
                    </div>

                    {/* Form Section */}
                    <div className="form-component">
                        <form>
                            <div className="form-group">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter Location" />
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-location-arrow text-gray-500"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control mb-3" placeholder="Enter Destination" />
                            </div>
                            <div className="form-group d-flex gap-2">
                                <input className="form-control flex-grow-1" type="date" />
                                <select className="form-control flex-grow-1">
                                    <option>Language</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-warning btn-block font-weight-bold w-100 mt-3">
                                See Prices
                            </button>
                        </form>
                    </div>

                    {/* Car Options Section */}
                    <div className="car-options card mt-4">
                        <div className="card-body">
                            {["Mini", "Prime Sedan", "Prime SUV"].map((car, index) => (
                                <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center">
                                        <img src="https://placehold.co/50x50" alt={`${car} car image`} className="img-fluid rounded-circle mr-3" />
                                        <div>
                                            <h5 className="font-weight-bold mb-0 text-start">{car}</h5>
                                            <small className="text-muted">{car === "Mini" ? "Comfy, economical cars" : car === "Prime Sedan" ? "Spacious sedans, top drivers" : "Spacious SUVs"}</small>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <h5 className="font-weight-bold mb-0">$20</h5>
                                        <small className="text-muted">2 min</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Confirm Booking Button */}
                    <div className="confirm-button">
                        <button type="button" className="btn btn-warning btn-block font-weight-bold mt-4 w-100">
                            Confirm Booking ...
                        </button>
                    </div>
                </div>

                {/* Map and Car Info Section */}
                <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="map-car-info card">
                        <div className="inner-shadow-container-cab_book">
                            <img src="https://placehold.co/600x500" alt="Map showing route and car locations" className="img-fluid rounded" style={{ height: "500px" }} />
                        </div>
                        <div className="card-body d-flex align-items-center">
                            <div>
                                <h5 className="font-weight-bold mb-0 text-start">Indica, Wagon R</h5>
                                <small className="text-muted text-start d-block">
                                    5.77 kms included. After that $0.21/km. Free cancellation until 1 hour before pickup.
                                    <span className="highlight_Cab_book"> Free waiting up to 45 minutes.</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}