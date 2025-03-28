import { useState } from "react";
import { FaMapMarkerAlt, FaStickyNote, FaClipboardList } from "react-icons/fa";
import "./placesinput.css";

function PlacesInput({ onAddPlace }) {
  const [place, setPlace] = useState("");

  function handleAddPlace() {
    if (place.trim() === "") return;
    onAddPlace(place);
    setPlace("");
  }

  return (
    <div className="places-visit-section">
      <p className="places-section-title">Places to Visit</p>
      <div className="places-input-actions">
        <div className="places-input-container">
          <FaMapMarkerAlt className="places-input-icon" />
          <input
            className="places-add-input"
            placeholder="Add a Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </div>
        <button className="places-action-button">
          <FaStickyNote />
          <span>Add Note</span>
        </button>
        <button className="places-action-button">
          <FaClipboardList />
          <span>Check List</span>
        </button>
      </div>
    </div>
  );
}

export default PlacesInput;
