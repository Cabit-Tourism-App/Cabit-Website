'use client';
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaBars, FaPlus, FaUser, FaPlane, FaHotel, FaUtensils, FaCar, FaTicketAlt, FaEllipsisH, FaCheck } from "react-icons/fa";
const Overview = () => {
    return (
        <div>
      <div className="bg-gray-100 p-6 rounded-lg  mb-6">
                  
                <div className="md:flex justify-between items-center">
                  <div className="flex space-x-4">
                    <button className="bg-gray-300 p-2 rounded-lg text-black flex items-center space-x-2"><FaPlane /><span>Flights</span></button>
                    <button className="bg-gray-300 p-2 rounded-lg text-black flex items-center space-x-2"><FaHotel /><span>Lodging</span></button>
                    <button className="bg-gray-300 p-2 rounded-lg text-black flex items-center space-x-2"><FaCar /><span>Rental Car</span></button>
                  </div>
      
                  <div className="text-center">
                      <br/>
                    <p className="text-sm">Budgeting</p>
                    <p className="text-lg font-bold">$1200.00</p>
                    <a className="text-blue-600 text-sm" href="#">View Details</a>
                  </div>
                  <div className="md:flex space-x-4">
                    <div className="text-center">
                      <p className="text-sm">Start Date</p>
                      <p className="text-lg font-bold">19/2/25</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm">End Date</p>
                      <p className="text-lg font-bold">25/2/25</p>
                    </div>
                    <button className="bg-yellow-400 text-white p-2 rounded-lg">Get Pre-Built Plan</button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg  mb-6">
                <p className="font-bold mb-2 text-start">Notes</p>
                <input className="w-full p-2 rounded-lg bg-gray-200 text-black" placeholder="Write Important Notes for Your Trip Here" type="text"/>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg ">
                <div className="md:flex justify-between items-center mb-4">
                  <p className="font-bold">Places to Visit</p>
                  <div className="md:flex space-x-2">
                    <input className="w-full h-8 p-2 mt-3 rounded-lg bg-gray-200 text-black" placeholder="Add a Place" type="text"/>
                    <div className="flex space-x-4 mt-2">
                    <button className=" w-1/2 h-8 mt-2 text-sm bg-gray-200 rounded-lg md:bg-gray-300 p-2 rounded-lg text-black flex items-center space-x-2"><FaPlus /><span> Note</span></button>
                    <button className=" w-1/2  h-8 mt-2 mt-2 text-sm bg-gray-200  rounded-lg md:bg-gray-300 p-2 rounded-lg text-black flex items-center space-x-2"><FaCheck /><span> List</span></button>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 overflow-x-auto pb-4">
                  <div className="flex-none w-48 bg-gray-300 p-2 rounded-lg ">
                    <img className="w-full h-32 object-cover rounded-lg mb-2" src="https://storage.googleapis.com/a1aa/image/-yU_0W74PMfWKkAM3kybQVOwwbW7rcLMV10rga-KoeM.jpg" alt="Hazratganj"/>
                    <p className="text-center text-black">Hazratganj</p>
                  </div>
                  <div className="flex-none w-48 bg-gray-300 p-2 rounded-lg ">
                    <img className="w-full h-32 object-cover rounded-lg mb-2" src="https://storage.googleapis.com/a1aa/image/1lzX-GYcYAdkE57A5mXCybrBcuEeHUDn0TcOrt2ILqo.jpg" alt="Janeshwar park"/>
                    <p className="text-center text-black">Janeshwar park</p>
                  </div>
                </div>
                <button className="bg-yellow-400 text-white p-2 rounded-lg mt-4">Add New Section</button>
              </div>
              </div>
    );
  };
  export default Overview;