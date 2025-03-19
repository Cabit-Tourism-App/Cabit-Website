"use client";
import { useState } from "react";
import "./page.css";
import CarousaL from "../../components/Carousal.jsx";
import { NavBarHome } from "../../components/Navbar.jsx";
import Form from "./first.jsx";
import Options from "./second.jsx";
import { useSearchParams } from 'next/navigation';


export default function PlanTrip() {
  const [showOptions, setShowOptions] = useState(false);
  const [tripInfo, setTripInfo] = useState(null); //  store collected info here
  const searchParams = useSearchParams();
  const whereTo = searchParams.get('whereTo') || '';
  const handleFormSubmit = (info) => {
    setTripInfo(info);              //  save the form data
    setShowOptions(true);           //  show options component
    console.log("Collected Info:", info); //  see what you get
  };

  return (
    <div className="container-m">
      <NavBarHome />
      <div className="Content">
        <div>
          <CarousaL />
          <div className="Home_Page_Background">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  {showOptions ? <Options tripInfo={tripInfo} /> : <Form onSubmit={handleFormSubmit} whereTo= {whereTo}/>}
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

