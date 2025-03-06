import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="login-container p-4 mt-5 bg-white shadow rounded">
            <h2 className="text-center mb-4">Login</h2>
            <form action="/logcode" method="POST">
              <div className="form-group">
                <label htmlFor="email" className="font-weight-bold">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" required />
              </div>
              <div className="text-center pt-2">
                <input type="submit" value="Submit" className="btn btn-success w-100" />
              </div>
            </form>
            <div className="footer-text text-center mt-3">
              <p>Don't have an account? <a href="#" className="text-primary">Sign Up</a></p>
              <p><a href="#" className="text-primary">Forgot Password?</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
