export default function User_data() {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center min-vh-100 ">
            <div className="bg-white p-4 rounded-lg shadow-lg" style={{width: "24rem"}}>
                <div className="text-center mb-4">
                    <h1 className="text-center font-weight-bold mb-2">
                        CabIt
                    </h1>            
                    <h1 className="h4 font-weight-bold">Signup</h1>
                </div>
                <form>
                    <div className="form-group text-start">
                        <label for="mobile">Mobile</label>
                        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+91</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
</div>
                    </div>
                    <div className="form-group text-start">
                        <label for="name">Name</label>
                        <input type="text" className="form-control mb-3" id="name" />
                    </div>
                    <div className="form-group text-start">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control mb-3" id="email" />
                    </div>
                    <div className="form-group text-start">
                        <label for="password">Password</label>
                        <input type="password" className="form-control mb-3" id="password" />
                    </div>
                    <div className="form-group text-start">
                        <label for="confirm-password">Confirm Password</label>
                        <input type="password" className="form-control mb-3" id="confirm-password" />
                    </div>
                    <button type="submit" className="btn btn-warning btn-block text-white w-100">Sign up</button>
                </form>
                <div className="text-center my-3 text-muted">or</div>
                <button className="btn btn-outline-secondary btn-block d-flex align-items-center justify-content-center w-100">
                    
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