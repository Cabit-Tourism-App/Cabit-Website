export default function PayForm(){
	return (<form>
              <div className="form-group text-start mt-2">
                <label htmlFor="cardName">Card Name</label>
                <input type="text" className="form-control" id="cardName" />
              </div>
              <div className="form-group text-start mt-2">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" />
              </div>
              <div className="d-flex gap-2 mt-2 mb-2">
                <div className="form-group text-start flex-grow-1">
                  <label htmlFor="ccv">CCV</label>
                  <input type="text" className="form-control" id="ccv" />
                </div>
                <div className="form-group text-start flex-grow-1">
                  <label htmlFor="expiryDate">Card Expiry Date</label>
                  <input type="text" className="form-control" id="expiryDate" />
                </div>
              </div>
              <button type="submit" className="btn btn-warning text-white w-100 mt-2">
                Confirm Payment
              </button>
            </form>);
}