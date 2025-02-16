export default function Login_page(){
    return(
        
        
         
        <div className="d-flex align-items-center justify-content-center min-vh-100 ">
         <div className="position-relative p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="position-relative z-10">
           <div className="d-flex justify-content-center mb-3">
           <h1 className="text-center font-weight-bold mb-2">
           CabIt
          </h1>
                     </div>
           <h2 className="text-center h5 font-weight-semibold mb-2">
            Enter Your Email or Phone number
           </h2>
           <input className="form-control mb-3" placeholder="Email/Mobile no." type="text"/>
           <button className="btn btn-warning w-100 mb-2 text-white">
     Login
    </button>
    <button className="btn btn-light w-100 text-white border border-gray-300">
     Signup
    </button>
          </div>
         </div>
         </div>
       
       
       
 
    );
}