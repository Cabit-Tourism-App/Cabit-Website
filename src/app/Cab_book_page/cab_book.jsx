export default function Cab_book(){
    return(
        <div className="bg-white border border-secondary shadow-sm w-60 mx-auto p-3" style={{ opacity: 0.8 }}>
    <div className="container py-5">
        <div className="row">
            <div className="col-lg-6">
                {/* <!-- Header Component --> */}
                <div className="header">
                    <h1 className="display-4 font-weight-bold text-black mb-4 text-start">BOOK YOUR CAB NOW</h1>
                    <p className="lead text-gray-700 mb-4 text-start">Add your trip details,</p>
                </div>
                {/* <!-- Form Component --> */}
                <div className="form-component">
                    <form>
                        <div className="form-group">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter Location"/>
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-location-arrow text-gray-500"><svg fill="#716a6a" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#716a6a"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control mb-3" placeholder="Enter Destination"/>
                        </div>
                        <div className="form-group d-flex gap-2">
  <input className="form-control flex-grow-1" type="date" />
  <select className="form-control flex-grow-1">
    <option>Language</option>
  </select>
</div>
                        <button type="button" className="btn btn-warning btn-block font-weight-bold w-100  mt-3">See Prices</button>
                    </form>
                </div>
                {/* <!-- Car Options Component --> */}
                <div className="car-options card mt-4">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex align-items-center">
                                <img src="https://placehold.co/50x50" alt="Mini car image" className="img-fluid rounded-circle mr-3"/>
                                <div>
                                    <h5 className="font-weight-bold mb-0 text-start">Mini</h5>
                                    <small className="text-muted">Comfy, economical cars</small>
                                </div>
                            </div>
                            <div className="text-right">
                                <h5 className="font-weight-bold mb-0">$20</h5>
                                <small className="text-muted">2 min</small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="d-flex align-items-center">
                                <img src="https://placehold.co/50x50" alt="Prime Sedan car image" className="img-fluid rounded-circle mr-3"/>
                                <div>
                                    <h5 className="font-weight-bold mb-0 text-start">Prime Sedan</h5>
                                    <small className="text-muted">Spacious sedans, top drivers</small>
                                </div>
                            </div>
                            <div className="text-right">
                                <h5 className="font-weight-bold mb-0">$20</h5>
                                <small className="text-muted">2 min</small>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img src="https://placehold.co/50x50" alt="Prime SUV car image" className="img-fluid rounded-circle mr-3"/>
                                <div>
                                    <h5 className="font-weight-bold mb-0">Prime SUV</h5>
                                    <small className="text-muted">Spacious SUVs</small>
                                </div>
                            </div>
                            <div className="text-right">
                                <h5 className="font-weight-bold mb-0">$20</h5>
                                <small className="text-muted">2 min</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Confirm Button Component --> */}
                <div className="confirm-button">
                    <button type="button" className="btn btn-warning btn-block font-weight-bold mt-4 w-100">Confirm Booking ...</button>
                </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
                {/* <!-- Map and Car Info Component --> */}
                <div className="map-car-info card">
                    <div className="inner-shadow-container-cab_book">
                        <img src="https://placehold.co/600x500" alt="Map showing route and car locations" className="img-fluid rounded" style={{height: "500px"}}/>
                    </div>
                    <div className="card-body d-flex align-items-center">
                        <img src="https://placehold.co/50x50" alt="Yellow car image" className="img-fluid rounded-circle mr-3"/>
                        <div>
                        <h5 className="font-weight-bold mb-0 text-start">Indica, Wagon R</h5>
<small className="text-muted text-start d-block">
    5.77 kms included. After that $0.21/km. Free cancellation until 1 hour before pickup.
    <span className="highlight_Cab_book">Free waiting up to 45 minutes.</span>
</small>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</div>
    );
}