import Form from "./form.jsx"

export default function PaymentPage() {
  return (
    <div className="bg-light d-flex align-items-center justify-content-center min-vh-100">
      <div className="bg-white p-4 rounded-lg shadow-lg w-100" style={{ maxWidth: "900px" }}>
        <div className="row">
          {/* Header Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="d-flex align-items-center mb-3">
              <img src="images/download.jpeg" alt="Cabit logo" width="30" height="30" className="me-2" />
              <h1 className="h4 fw-bold">Cabit</h1>
            </div>
            <p className="text-muted mb-4 text-start">
              Pay before the journey to avail offers and discounts. We will also be able to confirm rides{" "}
              <span className="text-warning fw-bold">faster</span>.
            </p>

            {/* Payment Form */}
            <Form/>
          </div>

          {/* QR Code Section */}
          <div className="col-md-6 d-flex flex-column align-items-center">
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
        </div>

        {/* Footer Section */}
        <div className="mt-4">
          <button className="btn btn-warning text-white w-100">Pay After the Trip...</button>
        </div>
      </div>
    </div>
  );
}
