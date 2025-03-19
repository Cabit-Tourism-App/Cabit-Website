'use client';

import { useState } from "react";

import Overview from "./Overview";
import Notes from "./Notes";
import MapSection from "./Map";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaBars, FaPlus, FaUser, FaPlane, FaHotel, FaUtensils, FaCar, FaTicketAlt, FaEllipsisH, FaCheck } from "react-icons/fa";

import PlacesTovisit from "./PlacesTovisit";
import Explore from "./Explore";
const Sidebartest = () => {
  const [activeSection, setActiveSection] = useState("Overview"); // State to track selected section
  const [sidebarVisible, setSidebarVisible] = useState(true); // State for mobile sidebar toggle

  return (
    <div className="bg-white text-black h-screen overflow-hidden flex flex-col md:flex-row">

              <div className="flex justify-between items-center mb-4 md:hidden  ">
              <button className="md:hidden" onClick={() => setSidebarVisible(true)}>
              <FaBars className="text-3xl text-black" />
              </button>
          <h1 className=" text-3xl font-bold text-black">Trip to Lucknow</h1>
          <div className="flex items-center">
            <FaUser className="text-3xl text-black mr-4" />
          </div>
        </div>
      {/* Sidebar Component */}
      <div className={`w-1/2 md:w-1/6 bg-white p-4 border-r border-gray-300 fixed md:relative ${sidebarVisible ? "block" : "hidden"} md:block`}>
      <div className="flex justify-between items-center mb-6">
                <div className="text-2xl font-bold text-black">CabIt</div>
                <button className="md:hidden" onClick={() => setSidebarVisible(false)}>
                  <FaTimes className="text-2xl text-black" />
                </button>
              </div>
        <nav className="space-y-4">
          <a className={`block text-start ${activeSection === "Overview" ? "text-yellow-500 font-bold" : "text-black"}`}
             onClick={() => setActiveSection("Overview")}
             href="#">
            Overview
          </a>
          
          <a className={`block text-start ${activeSection === "PlacesTovisit" ? "text-yellow-500 font-bold" : "text-black"}`}
             onClick={() => setActiveSection("PlacesTovisit")}
             href="#">
            Places to visit
          </a>
          <a className={`block text-start ${activeSection === "Explore" ? "text-yellow-500 font-bold" : "text-black"}`}
             onClick={() => setActiveSection("Explore")}
             href="#">
            Explore
          </a>
         
          <a className={`block text-start ${activeSection === "Notes" ? "text-yellow-500 font-bold" : "text-black"}`}
             onClick={() => setActiveSection("Notes")}
             href="#">
            Notes
          </a>
         
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2 text-black text-start">
              Trip Planner
            </h2>
            <ul className="space-y-2 text-black text-start">
              <li className="cursor-pointer hover:text-yellow-500">
                  
                Wed 19/2/25
              </li>
              <li className="cursor-pointer hover:text-yellow-500">
                  
                Fri 21/2/25
              </li>
              <li className="cursor-pointer hover:text-yellow-500">
                 
                Sat 22/2/25
              </li>
            </ul>
          </div>
          <button className="block mt-6 bg-yellow-500 text-black text-center py-2 rounded w-full text-start">
            Confirm Booking
          </button>
        </nav>
      </div>

      {/* Main Section Updates Dynamically */}
      <div className="flex-1 p-6 overflow-y-auto ">
        <div className="hidden md:flex justify-between items-center mb-4">
                  <h1 className=" text-3xl font-bold text-black">Trip to Lucknow</h1>
                  <div className="flex items-center">
                    <FaUser className="text-3xl text-black mr-4" />
                   
                  </div>
                </div>
        {activeSection === "Overview" && <Overview />}
       
        {activeSection === "PlacesTovisit" && <PlacesTovisit />}
        {activeSection === "Explore" && <Explore />}
        {activeSection === "Notes" && <Notes />}
       
      </div>
     <MapSection/>
    </div>
  );
};

export default Sidebartest;
