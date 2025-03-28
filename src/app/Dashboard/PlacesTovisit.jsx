"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaPlus } from "react-icons/fa";
import "./PlacesTovisit.css";

const tourData = [
  {
    date: "Wednesday, 19th January",
    places: [
      {
        name: "Bara Imambara",
        description:
          "Bara Imambara, built by Nawab Asaf-ud-Daula in 1784, is a grand Mughal-style monument in Lucknow...",
        image:
          "https://storage.googleapis.com/a1aa/image/riZ1_QDDZymSLFjyhInSn42x_r0nW5-3owETt5TiLjU.jpg",
      },
      {
        name: "Chota Imambara",
        description:
          "Built by Nawab Muhammad Ali Shah in 1838. Adorned with intricate chandeliers, calligraphy...",
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
          "Hazratganj is a bustling shopping and entertainment hub in Lucknow...",
        image:
          "https://storage.googleapis.com/a1aa/image/CpyK2hNyEckhB1sGDWakQFVYocmC5CGAqLlQGUcnl8Y.jpg",
      },
    ],
  },
];

const PlacesTovisit = () => {
  return (
    <div className="places-main-container">
      {tourData.map((day, index) => (
        <div key={index} className="places-day-section">
          <div className="places-date-header">
            <h3 className="places-date-text">{day.date}</h3>
            <button className="places-date-button">
              <FaCalendarAlt className="places-icon-style" />
              19/2-22/2
            </button>
          </div>

          {day.places.map((place, idx) => (
            <div key={idx} className="places-card-container">
              <div className="places-icon-box">
                <FaMapMarkerAlt className="places-map-icon" />
              </div>
              <div className="places-text-details">
                <h3 className="places-title-text">{place.name}</h3>
                <p className="places-description-text">{place.description}</p>
              </div>
              <img
                alt={`Image of ${place.name}`}
                className="places-image-style"
                src={place.image}
              />
            </div>
          ))}

          <div className="places-add-section">
            <input
              className="places-input-field"
              placeholder="Add a Place"
            />
            <button className="places-add-button">
              <FaPlus />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacesTovisit;
