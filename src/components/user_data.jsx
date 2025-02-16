export default function User_data() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center min-vh-100 " >
            <div className="bg-white p-4 rounded-lg shadow-lg" style={{width: "24rem"}}>
                <div className="text-center mb-4">
                    <h1 className="text-center font-weight-bold mb-2">
                        CabIt
                    </h1>            <h1 className="h4 font-weight-bold">Signup</h1>
                </div>
                <form>
                    <div className="form-group text-start">
                        <label htmlFor="mobile">Mobile</label>
                        <div className="input-group mb-3">
  <div className="input-group-prepend">
    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+91</button>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
      <div role="separator" className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
</div>
                    </div>
                    <div className="form-group text-start ">
                        <label htmlFor="name" >Name</label>
                        <input type="text" className="form-control mb-3" id="name" />
                    </div>
                    <div className="form-group text-start">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control mb-3" id="email" />
                    </div>
                    <div className="form-group text-start">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control mb-3" id="password" />
                    </div>
                    <div className="form-group text-start">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" className="form-control mb-3" id="confirm-password" />
                    </div>
                    <button type="submit" className="w-100 btn btn-warning btn-block text-white">Sign up</button>
                </form>
                <div className="text-center my-3 text-muted">or</div>
                <button className="w-100 btn btn-outline-secondary btn-block d-flex align-items-center justify-content-center">
                    Continue with Google
                </button>
            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </div>
        </div>
    );

}