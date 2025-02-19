export default function Paymentpage(){
    return(
        <div>
        <div className="bg-light d-flex align-items-center justify-content-center min-vh-100">
    <div className="bg-white p-4 rounded-lg shadow-lg w-100" style={{maxWidth: "900px"}}>
        <div className="row">
            {/* <!-- Header Component --> */}
            <div className="col-md-6 mb-4 mb-md-0">
                <div className="d-flex align-items-center mb-3">
                    <img src="" alt="Cabit logo" width="30" height="30" className="mr-2"/>
                    <h1 className="h4 font-weight-bold">Cabit</h1>
                </div>
                <p className="text-muted mb-4 text-start">
                    Pay before the journey to avail offers and discounts. We will also be able to confirm rides
                    <span className="text-warning">faster</span>.
                </p>
                {/* <!-- Payment Form Component --> */}
                <form>
                    <div className="form-group text-start mt-2">
                        <label htmlFor="cardName">Card Name</label>
                        <input type="text" className="form-control" id="cardName"/>
                    </div>
                    <div className="form-group text-start mt-2">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" className="form-control" id="cardNumber"/>
                    </div>
                    <div className="form-row d-flex gap-2 mt-2 mb-2 ">
                        <div className="form-group  text-start flex-grow-1">
                            <label htmlFor="ccv">CCV</label>
                            <input type="text" className="form-control" id="ccv"/>
                        </div>
                        <div className="form-group  text-start flex-grow-1">
                            <label htmlFor="expiryDate">Card expiry date</label>
                            <input type="text" className="form-control" id="expiryDate"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-warning btn-block text-white w-100 mt-2">Confirm Payment</button>
                </form>
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center  ">
                {/* <!-- QR Code Component --> */}
                <div className="bg-light p-4 rounded-lg shadow-sm w-100" style={{maxWidth: "300px"}}>
                    <img src="https://storage.googleapis.com/a1aa/image/6BvgJwMGX6ixo4aYkSgwl8hiyQe6emvkXqtxuZ-OdZo.jpg" alt="UPI QR Code" className="img-fluid mb-3"/>
                    <p className="text-center text-muted mb-0">SCAN & PAY</p>
                </div>
                {/* <!-- Total Bill Component --> */}
                <div className="mt-4 w-100" style={{maxWidth: "300px"}}>
                    <div className="d-flex justify-content-between">
                       
                        <p className="text-muted mb-0">Total Bill</p>
                        <a className="fas fa-print text-muted" style={{cursor: "pointer"}}>payment slip</a>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <p className="h4 font-weight-bold mb-0">$ 576.00</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer Component --> */}
        <div className="mt-4 d-block">
  <button className="btn btn-warning text-white ">Pay after the Trip...</button>
</div>
    </div>
    
    

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</div>

</div>




    );
}