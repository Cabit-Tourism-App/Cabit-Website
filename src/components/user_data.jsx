export default function User_data(){
    return(
        <div>
    <div className="custom-container mt-5">
        <div className="text-center mb-4">
        <h1 className="text-center font-weight-bold mb-2">
           CabIt
          </h1>            <h1 className="h4 font-weight-bold">Signup</h1>
        </div>
        <form>
            <div className="form-group">
                <label for="mobile">Mobile</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <img src="https://storage.googleapis.com/a1aa/image/PdRgYDk3-I4WafF4VUOKYgu72rvpqYH8-ZhSP5tUc-M.jpg" alt="Country flag" className="img-fluid" width="20" height="20"/>
                        </span>
                    </div>
                    <select className="form-control" id="mobile">
                        <option>IN</option>
                   
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            <div className="form-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" className="form-control" id="confirm-password"/>
            </div>
            <button type="submit" className="btn btn-warning btn-block text-white">Sign up</button>
        </form>
        <div className="text-center my-3 text-muted">or</div>
        <button className="btn btn-outline-secondary btn-block d-flex align-items-center justify-content-center">
            <img src="https://storage.googleapis.com/a1aa/image/DrVkDmisoYfUVYfYzBLTgiP7IZmD5qtfexZI6FvJ9Us.jpg" alt="Google logo" className="img-fluid mr-2" width="20" height="20"/>
            Continue with Google
        </button>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
);

}