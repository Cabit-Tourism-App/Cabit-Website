export default function Bill(){
	return (<div className="col-md-6 d-flex flex-column align-items-center">
            <div className="bg-light p-4 rounded-lg shadow-sm w-100 text-center" style={{ maxWidth: "300px" }}>
              <img
                src="https://storage.googleapis.com/a1aa/image/6BvgJwMGX6ixo4aYkSgwl8hiyQe6emvkXqtxuZ-OdZo.jpg"
                alt="UPI QR Code"
                className="img-fluid mb-3"
              />
              <p className="text-muted mb-0">SCAN & PAY</p>
            </div>

            {/* Total Bill Section */}
            <div className="mt-4 w-100" style={{ maxWidth: "300px" }}>
              <div className="d-flex justify-content-between">
                <p className="text-muted mb-0">Total Bill</p>
                <a className="text-muted" href="#" style={{ cursor: "pointer" }}>
                  Payment Slip
                </a>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="h4 fw-bold mb-0">$576.00</p>
              </div>
            </div>
          </div>
       );
}