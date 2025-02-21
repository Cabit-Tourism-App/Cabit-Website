"use client"
import { useState } from "react";
import "./page.css";
import CarousaL from "../../components/Carousal.jsx";
import { NavBarHome } from "../../components/Navbar.jsx";
import Form from "./first.jsx";
import Options from "./second.jsx";

export default function PlanTrip() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="container-m">
      <NavBarHome />
      {/* Main Content */}
      <div className="Content">
        <div>
          <div>
            <CarousaL />
          </div>
          <div className="Home_Page_Background">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  {showOptions ? <Options /> : <Form onSubmit={() => setShowOptions(true)} />}
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

