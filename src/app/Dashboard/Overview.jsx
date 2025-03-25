'use client';
import "./Overview.css";
import { FaPlane, FaHotel, FaCar, FaPlus, FaCheck ,FaCalendarAlt} from "react-icons/fa";

const Overview = () => {
  return (
    <div>




      <div className="dashboard-summary-container">
        <div className="trip-info-card">
          <p className="info-card-title">Budgeting</p>
          <p className="info-card-main">$ 1200.00</p>
          <p className="view-details-link">View Details</p>
        </div>

        <div className="trip-info-card">
          <p className="info-card-title">Total Members</p>
          <p className="info-card-main">4 Adults, 2 Kids</p>
          <p className="view-details-link">View Details</p>
        </div>

        <div className="date-range-section">
          <div className="calendar-date-card">
            <FaCalendarAlt className="calendar-icon-box" />
            <div >
              <p className="info-card-title">Start Date</p>
              <p className="info-card-main">19/2/25</p>
            </div>
          </div>
          <div className="calendar-date-card">
            <FaCalendarAlt className="calendar-icon-box" />
            <div>
              <p className="info-card-title">End Date</p>
              <p className="info-card-main">25/2/25</p>
            </div>
          </div>
        </div>

        <div className="prebuilt-plan-section">
          <p className="plan-info-text">Don’t have a tour plan?</p>
          <button className="get-plan-button">Get Pre-Built Plan</button>
        </div>
      </div>







      <div className="w-full bg-black p-2 rounded-lg" style={{ "marginBottom":"10px"}}>
        <label className="text-white font-bold text-lg mb-2 block">Notes</label>
        <input
          type="text"
          placeholder="Write Important Notes for Your Trip Here"
          className="w-full p-2 rounded-lg bg-white text-gray-700 placeholder-gray-400 outline-none"
        />
      </div>



      <div className="trip-overview-container">
        <div className="places-visit-section">
          <p className="places-section-title">Places to Visit</p>
          <div className="places-input-actions">
            <input className="places-add-input" placeholder="Add a Place" />
            <div className="places-action-buttons">
              <button className="action-button-style"><FaPlus /><span> Note</span></button>
              <button className="action-button-style"><FaCheck /><span> List</span></button>
            </div>
          </div>
        </div>

        <div className="places-card-scroll">
          <div className="place-card-item">
            <img className="place-image-style" src="https://storage.googleapis.com/a1aa/image/-yU_0W74PMfWKkAM3kybQVOwwbW7rcLMV10rga-KoeM.jpg" alt="Hazratganj" />
            <p className="place-name-text">Hazratganj</p>
          </div>
          <div className="place-card-item">
            <img className="place-image-style" src="https://storage.googleapis.com/a1aa/image/1lzX-GYcYAdkE57A5mXCybrBcuEeHUDn0TcOrt2ILqo.jpg" alt="Janeshwar park" />
            <p className="place-name-text">Janeshwar park</p>
          </div>
        </div>

        <button className="add-section-button">Add New Section</button>
      </div>
    </div>
  );
};

export default Overview;
