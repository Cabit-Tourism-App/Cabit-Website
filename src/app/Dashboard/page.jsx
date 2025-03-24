'use client';
import { useState } from "react";
import Overview from "./Overview";
import Notes from "./Notes";
import MapSection from "./Map";
import PlacesTovisit from "./PlacesTovisit";
import Explore from "./Explore";
import Sidebar from "./sidebar";
import './page.css';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("Overview");
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="dashboard-wrapper">   {/* 🔥 Wrapping everything */}
      <div className="dashboard-container">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />

        <div 
          className={`sidebar-toggle ${sidebarVisible ? 'shrink' : ''}`} 
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? "×" : ">"}
        </div>

        <div className="main-content">
          <div className="header">
            <h1>Trip to Lucknow</h1>
          </div>

          {activeSection === "Overview" && <Overview />}
          {activeSection === "PlacesTovisit" && <PlacesTovisit />}
          {activeSection === "Explore" && <Explore />}
          {activeSection === "Notes" && <Notes />}
        </div>

        <MapSection />
      </div>
    </div>
  );
}
