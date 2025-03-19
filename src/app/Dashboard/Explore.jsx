'use client';
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaBars, FaPlus, FaUser, FaPlane, FaHotel, FaUtensils, FaCar, FaTicketAlt, FaEllipsisH, FaCheck } from "react-icons/fa";
const tourData = [
    {
     
      places: [
        {
          name: "Bara Imambara",
          description:
            "Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is a grand Mughal-style monument in Lucknow known for its labyrinth, ",
          image:
            "https://storage.googleapis.com/a1aa/image/riZ1_QDDZymSLFjyhInSn42x_r0nW5-3owETt5TiLjU.jpg",
        },
        {
          name: "Bara Imambara",
          description:
            "Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is a grand Mughal-style monument in Lucknow known for its labyrinth,",
          image:
            "https://storage.googleapis.com/a1aa/image/riZ1_QDDZymSLFjyhInSn42x_r0nW5-3owETt5TiLjU.jpg",
        },
        {
          name: "Bara Imambara",
          description:
            "Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is a grand Mughal-style monument in Lucknow known for its labyrinth,",
          image:
            "https://storage.googleapis.com/a1aa/image/riZ1_QDDZymSLFjyhInSn42x_r0nW5-3owETt5TiLjU.jpg",
        },
        {
          name: "Bara Imambara",
          description:
            "Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is a grand Mughal-style monument in Lucknow known for its labyrinth,",
          image:
            "https://storage.googleapis.com/a1aa/image/riZ1_QDDZymSLFjyhInSn42x_r0nW5-3owETt5TiLjU.jpg",
        },
        {
          name: "Hazratganj",
          description:
            "Hazratganj is a bustling shopping and entertainment hub in Lucknow, blending colonial charm with modern attractions. ",
          image:
            "https://storage.googleapis.com/a1aa/image/CpyK2hNyEckhB1sGDWakQFVYocmC5CGAqLlQGUcnl8Y.jpg",
        },
      ],
    },
  
  ];
export default function Explore(){
    return(
        <div className="bg-gray-100 p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-black text-start">Explore</h1>
        
      
        <div  className="mb-6">
          {/* Date Heading */}
            <h3 className="text-lg font-bold text-black mt-1 text-start">The City of nawabs-<span className="text-yellow-500">Lucknow</span></h3>
          
           </div>
      {tourData.map((day, index) => (
        <div key={index} className="d-flex flex-wrap mb-6 ml-3 ">
          {/* Date Heading */}
           
            
         
          {day.places.map((place, idx) => (
            
            
                <div className="w-full md:w-1/2 lg:w-1/3 card  m-2 " style={{ width: '18rem' }}>
                <img src={place.image} width={350} height={200} className="card-img-top" alt="Taj Mahal with reflection in water" />
                <div className="card-body">
                    <h5 className="card-title text-start">
                    <span className="badge badge-custom me-2 bg-[#FFEA66] text-black">{idx+1}</span>
                        {place.name}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-start">An Immortal Symbol of Love</h6>
                    <p className="card-text text-start">{place.description}</p>
                    <div className="d-flex justify-content-between mt-2 ">
                   
                    </div>
                </div>
                </div>
     
                
              ))}
              
              
             
            </div>
          ))}
        </div>
    );
}