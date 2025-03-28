import "./summary.css"

import { FaCalendarAlt } from "react-icons/fa";

export default function SummaryCard() {
  return (
    <div className="dashboard-summary-container">
      <div className="trip-info-card">
        <p className="info-card-title">Budgeting</p>
        <p className="info-card-main">$ 1200.00</p>
        <p className="view-details-link">View Details</p>
      </div>
      <div className="trip-info-card">
        <p className="info-card-title">Trip Duration</p>
        <p className="info-card-main">7 Days, 6 Nights</p>
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
          <div>
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
      <div className = "prebuilt-plan-section">
        Don't have a plan?
        <button className="get-plan-button">Get Plan</button>
      </div>
    </div>
  );
};


