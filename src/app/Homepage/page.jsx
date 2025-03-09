import { ImageCards } from "@/components/GeneralCards";
import ImageBox from "@/components/ImageBox";
import TravelSteps from "@/components/3easysteps";
import MakefeelBetter from "@/components/Makefeelbetter";
import Safetyeasy from "@/components/SafetyeasyTravel";
export default function Homepage(){
    return(<div className="Home_Page_Background">

        <div className="Home_Page_Content ">
           <div className="row ">
               <h1 className="font-bold">What We Offer</h1>
           </div>
           <br />
           <div className="row">
               <div className="Flex_Row flex ">
                   <ImageCards width="35vh" height="74vh" heading = "Tour Planner" text = "Customize your trip with a personalized itinerary." source = "/images/homepage/col1.jpeg"/>
                   <ImageCards width="35vh" height="74vh" heading = "Cab Booking"  text = "Book cabs with drivers who understand your language for a smooth journey." source = "/images/homepage/col2.jpeg"/>
                   <ImageCards width="35vh" height="74vh" heading = "Best Destinations "  text = "Discover top travel spots in India, handpicked for every type of traveler." source = "/images/homepage/col3.jpeg"/>
                   <ImageCards width="35vh" height="74vh" heading = "No Lang-Barriers"  text = "Overcome language challenges with in-app translation tools." source = "/images/homepage/col4.jpeg"/>
               </div>
           </div>
           <br />
           <br />
           <br />
           <br />

           {/* make 3 steps  */}
   <TravelSteps/>
        



{/* make 3 steps */}
           <br />
           <br />
           <br />
           <br />
           {/* 1 How we help your travel
              2 Ready Made Trip plans
              3 Safe ans secure travel (women Safety) */}
            
         
              
           </div>
           <MakefeelBetter/>  
           <br />
           <br />
           <br />
           <br />
           <Safetyeasy/>
          
           <br />
           <br />
           <br />
           <br />
           
{/* Top destinatiom */}
       <div >
<div className="container py-5">
<h1 className="text-center fw-bold">Top Destinations</h1>
<p className="text-center text-muted">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
<div className="d-flex justify-content-center mt-4">
<nav className="nav">
<a className="nav-link active text-warning fw-bold" href="#">Rajasthan</a>
<a className="nav-link text-white" href="#">Assam</a>
<a className="nav-link text-white" href="#">Manali</a>
<a className="nav-link text-white" href="#">Srinagar</a>
<a className="nav-link text-white" href="#">Goa</a>
</nav>
</div>
<div className="row mt-5 g-4">
{/* First Row */}
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Jaipur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">Jaipur</div>
<div>World</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Udaipur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">Udaipur</div>
<div>World</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Lodpur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">udaipur</div>
<div>World</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Jodhpur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">Jodhpur</div>
<div>World</div>
</div>
</div>
</div>

{/* Second Row */}
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Godpur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">hamirpur</div>
<div>World</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Chodpur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">Rampur</div>
<div>World</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Chodpur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">Rampur</div>
<div>World</div>
</div>
</div>
</div>
<div className="col-12 col-sm-6 col-lg-3">
<div className="position-relative">
<img src="https://placehold.co/300x200" className="img-fluid rounded" alt="A beautiful view of Chodpur"/>
<div className="position-absolute top-0 start-0 m-2 bg-dark text-white p-1 rounded">3.5</div>
<div className="position-absolute bottom-0 start-0 m-2 text-white">
<div className="fs-5 fw-bold">Rampur</div>
<div>World</div>
</div>
</div>
</div>
</div>

</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</div>
           
       

{/* top destination */}




       </div> );
}