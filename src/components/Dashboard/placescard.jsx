import "./placescard.css";
import { FaPlus } from "react-icons/fa";

function PlacesCard({ place }) {
  return (
    <div className="place-card-item">
      <img className="place-image-style" src={place.img} alt={place.name} />
      <div className="place-card-footer">
        <p className="place-name-text">{place.name}</p>
        <button className="place-add-button">
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default PlacesCard;
