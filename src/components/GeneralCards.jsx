"use client"
import "./GeneralCards.css";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { signUp, oAuthSignIn } from "../auth/nextjs/actions";


import { signIn } from "../auth/nextjs/actions" ;


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
  const router = useRouter()
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Simple email validation (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailOrPhone)) {
      setError("Please enter a valid email address.")
      return
    }

    const error = await signIn({ email: emailOrPhone, password })
    if (error) {
      setError(error)
    } else {
      router.push("/") // redirect on successful login
    }
  }

  return (
    <div className="Login-card" style={{ height, width }}>
      <div className="Login-content" style={{ position: "relative" }}>
        <div className="logo">
          <h1>CabIt</h1>
        </div>
        <h2 className="Login-heading">Enter Your Email</h2>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-destructive">{error}</p>}
          <input
            className="Input-field"
            placeholder="Email"
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            required
          />
          <input
            className="Input-field"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-login">
            Login
          </button>
          <button type="button" className="btn-signup" onClick={() => router.push("/SignUp")}>
            Signup
          </button>
        </form>
      </div>
    </div>
  )
}


export function OtpCard() {
  return (
    <div className="otp-container">
      <div className="otp-card">
        
        {/* Title */}
        <h1 className="otp-title">CabIt</h1>
        
        {/* OTP Instructions */}
        <p className="otp-instruction">Download app to get OTP</p>
        <p className="otp-validity">OTP is valid for 60 seconds</p>

        {/* OTP Input */}
        <div className="otp-input-container">
          <input className="form-control otp-input" placeholder="Enter OTP" type="text" />
          <div className="otp-resend">
            <a href="#">Resend OTP</a>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="btn btn-warning otp-confirm">CONFIRM</button>

        {/* Download App Links */}
        <div className="otp-download">
          <a href="#" className="otp-download-btn">Google Play</a>
          <a href="#" className="otp-download-btn">App Store</a>
        </div>

      </div>
    </div>
  );
}




export function SignUpCard() {
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const errorMessage = await signUp({
      phone: formData.mobile,
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    setError(errorMessage);
  }

  return (
    <div className="Signup-Container">
      <div className="Signup-Card">
        {/* Header Section */}
        <div className="Signup-Header">
          <h1>CabIt</h1>
          <h2>Signup</h2>
        </div>

        {/* Signup Form */}
        <form className="Signup-Form" onSubmit={handleSubmit}>
          {error && <div className="Signup-Error">{error}</div>}

          {/* Mobile Number Input */}
          <div className="Form-Group">
            <label htmlFor="mobile">Mobile</label>
            <input 
              type="text" 
              id="mobile" 
              placeholder="Enter mobile number" 
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Name Input */}
          <div className="Form-Group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div className="Form-Group">
            <label htmlFor="email">Email address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter email" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="Form-Group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter password" 
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="Form-Group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirm password" 
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Signup Button */}
          <button type="submit" className="Signup-Button">
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="Signup-Divider">or</div>

        {/* Google Signup Button */}
        <button className="Google-Button" onClick={() => oAuthSignIn("google")}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}


