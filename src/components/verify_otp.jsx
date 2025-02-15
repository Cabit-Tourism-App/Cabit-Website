export default function Verify_otp(){
    return(
       <div>
       
        <div className="d-flex align-items-center justify-content-center min-vh-100 ">
         <div className="bg-white p-4 rounded-lg shadow-lg" style={{width: "24rem"}}>
          <h1 className="text-center font-weight-bold mb-2">
           CabIt
          </h1>
          <p className="text-center mb-3">
           Download app to get OTP
          </p>
          <p className="text-center text-muted mb-3">
           OTP is valid for 60 seconds
          </p>
          <div className="mb-3">
           <input className="form-control" placeholder="OTP" type="text"/>
           
           <div class="d-flex justify-content-end">
     <a className="text-muted mt-1" href="#" style={{fontSize: "0.75rem"}}>
      resend otp
     </a>
    </div>
          
          </div>
          <button className="btn btn-warning w-100 font-weight-bold text-dark">
    CONFIRM
   </button>
          <div className="d-flex justify-content-between mt-4">
           <a className="w-50 pr-1" href="#">
            <div className="btn btn-dark btn-block text-white">
             Google Play
            </div>
           </a>
           <a className="w-50 pl-1" href="#">
            <div className="btn btn-dark btn-block text-white">
             App Store
            </div>
           </a>
          </div>
         </div>
         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js">
         </script>
         <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js">
         </script>
         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js">
         </script>
        </div>
        </div>
     

    );
}