"use client"
import "./GeneralCards.css";


export  function ImageCards({ height = "350px", width = "80%" ,source= "images/download.jpeg",heading="heading",text="Some sample text use wanna add but kep it concise" }) {
  return (
    <div className="Image-Card-Design" style={{ height:height, width:width,minWidth:"200px",minHeight:"300px" }}> 
      <div className = "Image_Cards_Image">
      	<img src = {source} width="100%" height="100%"/>
      </div>
      <hr/>
      <div>
      	<h3 style={{position:"relative"}}>{heading}</h3>
      	<p style={{position:"relative"}}>{text}</p>
      </div>
    </div>
  );
}

export function LoginCard({ height = "350px", width = "80%" }) {
    return (
            <div className="Login-card" style={{ height:height, width:width}}>
                <div className="Login-content" style={{position:"relative"}}>
                    <div className="logo">
                        <h1>CabIt</h1>
                    </div>
                    <h2 className="Login-heading">Enter Your Email or Phone number</h2>

                    <form>
                        <input 
                            className="Input-field" 
                            placeholder="Email/Mobile no." 
                            type="text" 
                        />
                        <input 
                            className="Input-field" 
                            placeholder="Password" 
                            type="password" 
                        />
                        <button className="btn-login">
                            Login
                        </button>
                        <button className="btn-signup">
                            Signup
                        </button>
                    </form>
                </div>
            </div>
    );
}

export function OtpCard() {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="bg-white p-4 rounded-lg shadow-lg" style={{ width: "24rem" }}>
        
        {/* Title */}
        <h1 className="text-center font-weight-bold mb-2">CabIt</h1>
        
        {/* OTP Instructions */}
        <p className="text-center mb-3">Download app to get OTP</p>
        <p className="text-center text-muted mb-3">OTP is valid for 60 seconds</p>

        {/* OTP Input */}
        <div className="mb-3">
          <input className="form-control" placeholder="Enter OTP" type="text" />
          <div className="d-flex justify-content-end">
            <a className="text-muted mt-1" href="#" style={{ fontSize: "0.75rem" }}>
              Resend OTP
            </a>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="btn btn-warning w-100 font-weight-bold text-dark">CONFIRM</button>

        {/* Download App Links */}
        <div className="d-flex justify-content-between mt-4">
          <a className="w-50 pr-1" href="#">
            <div className="btn btn-dark btn-block text-white">Google Play</div>
          </a>
          <a className="w-50 pl-1" href="#">
            <div className="btn btn-dark btn-block text-white">App Store</div>
          </a>
        </div>

      </div>
    </div>
  );
}



export function SignUpCard() {
  return (
    <div className="Signup-Container">
      <div className="Signup-Card">
        
        {/* Header Section */}
        <div className="Signup-Header">
          <h1>CabIt</h1>
          <h2>Signup</h2>
        </div>

        {/* Signup Form */}
        <form className="Signup-Form">
          {/* Mobile Number Input */}
          <div className="Form-Group">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" id="mobile" placeholder="Enter mobile number" />
          </div>

          {/* Name Input */}
          <div className="Form-Group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          {/* Email Input */}
          <div className="Form-Group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>

          {/* Password Input */}
          <div className="Form-Group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>

          {/* Confirm Password Input */}
          <div className="Form-Group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm password" />
          </div>

          {/* Signup Button */}
          <button type="submit" className="Signup-Button">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="Signup-Divider">or</div>

        {/* Google Signup Button */}
        <button className="Google-Button">
          Continue with Google
        </button>
      </div>
    </div>
  );
}


