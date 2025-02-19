export default function Destionation_pick(){
    return(
<div className="bg-white border border-secondary shadow-sm w-60 mx-auto p-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }} >
<div className="container py-4">
         <div className="row justify-content-between align-items-start">
          {/* <!-- Header Component --> */}
          <div className="col-md-6 text-center text-md-left mb-4 mb-md-0">
           <h1 className="display-4 fw-bolder text-dark text-start">
            Effortless Travel Planning!
            <br/>
            Let AI Be Your Expert Guide.
           </h1>
           <p className="lead text-muted mt-2 text-start">
            Bid farewell to generic holiday packages.
            <br/>
            Get Your AI-Personalised Itineraries
           </p>
           <div className="text-start">
           <button className="btn btn-warning fw-bolder mt-4 ">
            Plan Itinerary For Free !
           </button>
           </div>
          </div>
          {/* <!-- Form Component --> */}
          <div className="col-md-5 border rounded-lg shadow-lg p-4 bg-white">
        <div>
          <h2 className="h4 fw-bolder  text-dark text-start">
            Get your free travel plan now
           </h2>
           <form className="mt-4">
            <div className="form-group text-start">
                <div className="mb-2">
             <label className="fw-bolder text-muted">
              What do you want to explore?
             </label>
             </div>
             <input className="form-control mb-3" placeholder="Departing from" type="text"/>
             <input className="form-control mb-3" placeholder="Search destination" type="text"/>
            </div>
            <div className="form-group text-start ">
                <div className="mb-2">
             <label className="fw-bolder text-muted  ">
              When are you planning to travel?
             </label>
             </div>
             <div className="d-flex gap-2">
              <div className="mr-2 w-50 text-start">
               <label className="fw-bolder text-muted text-start">
                Start Date
               </label>
               <input className="form-control mb-3" type="date"/>
              </div>
              <div className="w-50 text-start">
               <label className="fw-bolder text-muted ">
                End Date
               </label>
               <input className="form-control mb-3" type="date"/>
              </div>
             </div>
            </div>
            <a className="text-muted small d-block mb-3 text-start" href="#">
             Not sure? Let us decide best time for your trip.
            </a>
            <button className="btn btn-warning btn-block fw-bolder w-100">
             Continue
            </button>
           </form>
          </div>
         </div>
         </div>
         {/* <!-- Features Component --> */}
         <div className="row justify-content-center align-items-center mt-5">
          <div className="col-md-3 text-center mb-4 mb-md-0">
           <img alt="Icon representing personalized itineraries" className="mb-2" height="64" src="https://storage.googleapis.com/a1aa/image/8zg6ZpbMsSroJU17MqEQnHR1ZvKs8PNGXSwNb1okMWk.jpg" width="64"/>
           <p className="fw-bolder">
            Free Personalized Itineraries
           </p>
          </div>
          <div className="col-md-3 text-center mb-4 mb-md-0">
           <img alt="Icon representing affordable bookings" className="mb-2" height="64" src="https://storage.googleapis.com/a1aa/image/8qCNXH6zQu-uNVqtjLymhA4NnZbTGSE8z43av6-WzDE.jpg" width="64"/>
           <p className="fw-bolder">
            Affordable &amp; Flexible Bookings
           </p>
          </div>
          <div className="col-md-3 text-center">
           <img alt="Icon representing zero hidden charges" className="mb-2" height="64" src="https://storage.googleapis.com/a1aa/image/7aL-FU5a9jvs-i2fWI7Xy2fZGpmoFj2I6IEJKDNjjag.jpg" width="64"/>
           <p className="fw-bolder">
            Zero Hidden Charges
           </p>
          </div>
         </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js">
        </script>
       </div>
    );
}