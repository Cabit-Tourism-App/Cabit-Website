'use client';



import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTimes, FaBars, FaPlus, FaUser } from "react-icons/fa";
const tourData = [
    {
      date: "Wednesday, 19th January",
      places: [
        {
          name: "Bara Imambara",
          description:
            "Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is a grand Mughal-style monument in Lucknow known for its labyrinth, central hall, and the intriguing Bhool Bhulaiya (labyrinth), making it a must-visit place.",
          image:
            "https://storage.googleapis.com/a1aa/image/riZ1_QDDZymSLFjyhInSn42x_r0nW5-3owETt5TiLjU.jpg",
        },
        {
          name: "Chota Imambara",
          description:
            "Built by Nawab Muhammad Ali Shah in 1838. Adorned with intricate chandeliers, calligraphy, and a golden dome, it serves as a congregation hall for Shia Muslims and a symbol of Lucknow's rich heritage.",
          image:
            "https://storage.googleapis.com/a1aa/image/X2bLW5dVa3rYwcI0fO-9BPCxe1UZFnBXMyYgREBih4o.jpg",
        },
      ],
    },
    {
      date: "Friday, 21st January",
      places: [
        {
          name: "Hazratganj",
          description:
            "Hazratganj is a bustling shopping and entertainment hub in Lucknow, blending colonial charm with modern attractions. Known for its vibrant cafes, shops, and theaters, it's a favorite spot for locals and visitors alike.",
          image:
            "https://storage.googleapis.com/a1aa/image/CpyK2hNyEckhB1sGDWakQFVYocmC5CGAqLlQGUcnl8Y.jpg",
        },
      ],
    },
  ];
const PlacesTovisit = () => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg">
               {tourData.map((day, index) => (
                 <div key={index} className="mb-6">
                   {/* Date Heading */}
                   <div className="flex justify-between items-center mb-2">
                     <h3 className="text-lg font-bold text-black">{day.date}</h3>
                     <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center">
                       <FaCalendarAlt className="mr-2" />
                       19/2-22/2
                     </button>
                   </div>
                   {day.places.map((place, idx) => (
                     <div key={idx} className="bg-gray-200 p-4 rounded-lg mb-4 flex items-start">
                       
                       {/* Location Icon */}
                       <div className="mr-4">
                         <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                           <FaMapMarkerAlt />
                         </div>
                       </div>
                       
                       {/* Place Details */}
                       <div className="flex-1">
                         <h3 className="text-lg font-bold text-black text-start">{place.name}</h3>
                         <p className="text-sm text-black text-start">{place.description}</p>
                       </div>
                       
                       {/* Place Image */}
                       <img alt={`Image of ${place.name}`} className="w-24 h-24 rounded-lg" src={place.image} />
                     </div>
                   ))}
                   
                   {/* Add a Place Input */}
                   <div className="bg-gray-200 p-4 rounded-lg flex items-center">
                     <input className="flex-1 bg-gray-300 text-black p-2 rounded mr-2" placeholder="Add a Place" />
                     <button className="bg-gray-300 text-black px-4 py-2 rounded">
                       <FaPlus />
                     </button>
                   </div>
                 </div>
               ))}
             </div>
    );
  };
  export default PlacesTovisit;
  
  
  