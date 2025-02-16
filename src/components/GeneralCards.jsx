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


export function LoginCards({ height = "350px", width = "80%" }) {
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

