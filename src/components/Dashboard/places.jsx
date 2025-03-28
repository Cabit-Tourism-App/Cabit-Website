import { useState } from "react";
import PlacesInput from "./placesinput";
import PlacesCard from "./placescard";
import "./places.css";

function TripOverview() {
  const [places, setPlaces] = useState([
    { name: "Hazratganj", img: "https://storage.googleapis.com/a1aa/image/-yU_0W74PMfWKkAM3kybQVOwwbW7rcLMV10rga-KoeM.jpg" },
    { name: "Janeshwar Park", img: "https://storage.googleapis.com/a1aa/image/1lzX-GYcYAdkE57A5mXCybrBcuEeHUDn0TcOrt2ILqo.jpg" },
    { name: "The Residency", img: "https://storage.googleapis.com/a1aa/image/1lzX-GYcYAdkE57A5mXCybrBcuEeHUDn0TcOrt2ILqo.jpg" }, // Empty to test fallback
    { name: "Aminabad", img: "https://storage.googleapis.com/a1aa/image/1lzX-GYcYAdkE57A5mXCybrBcuEeHUDn0TcOrt2ILqo.jpg" },
    { name: "Memorial Park", img: "https://storage.googleapis.com/a1aa/image/1lzX-GYcYAdkE57A5mXCybrBcuEeHUDn0TcOrt2ILqo.jpg" } // Invalid URL to test fallback
  ]);

  function addPlace(newPlace) {
    setPlaces([...places, { name: newPlace, img: "https://source.unsplash.com/200x200/?city" }]);
  }

  return (
    <div className="trip-overview-container">
      <PlacesInput onAddPlace={addPlace} />
      <p className="places-subtitle">Selected places</p>
      <div className="row">
        <div className="places-scroll-container">
          {places.map((place, index) => (
            <PlacesCard key={index} place={place} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TripOverview;
