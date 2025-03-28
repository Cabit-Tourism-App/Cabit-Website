'use client';
import "./Overview.css";
import { FaPlane, FaHotel, FaCar, FaPlus, FaCheck ,FaCalendarAlt} from "react-icons/fa";


import SummaryCard from "../../components/Dashboard/summary"
import Notes from "../../components/Dashboard/notes"
import Places from "../../components/Dashboard/places"

export default function Overview(){
  return (
    <div >
      <SummaryCard/>

      <Notes/>


      <Places/>
      <button className="add-section-button">Add New Section</button>
    </div>
  );
}
