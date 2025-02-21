import "./page.css";
import { FaFileExcel, FaGoogleDrive, FaRegStickyNote, FaFileAlt, FaTable, FaRegFile, FaRegTimesCircle } from "react-icons/fa";

export default function TripPlan() {
  return (
    <div className="TripPlanOptions">
      <h2>Do you already have documents of your trip plan?</h2>
      <div className="ButtonGroup">
        <button className="optionButton">
          <FaRegTimesCircle className="buttonIcon" /> I Don't Have a Plan
        </button>
        <button className="optionButton">
          <FaFileExcel className="buttonIcon" /> MS Excel
        </button>
        <button className="optionButton">
          <FaRegStickyNote className="buttonIcon" /> Notion
        </button>
        <button className="optionButton">
          <FaTable className="buttonIcon" /> Google Sheets
        </button>
        <button className="optionButton">
          <FaFileAlt className="buttonIcon" /> Google Docs
        </button>
        <button className="optionButton">
          <FaGoogleDrive className="buttonIcon" /> Google Notes
        </button>
        <button className="optionButton">
          <FaRegFile className="buttonIcon" /> Other Format
        </button>
      </div>
    </div>
  );
}
