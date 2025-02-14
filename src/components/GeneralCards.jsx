"use client"
import "./GeneralCards.css";


export default function ImageCards({ height = "350px", width = "80%" ,source= "images/download.jpeg",heading="heading",text="Some sample text use wanna add but kep it concise" }) {
  return (
    <div className="Image-Card-Design" style={{ height:height, width:width,minWidth:"200px",minHeight:"300px" }}> 
      <div className = "Image_Cards_Image">
      	<img src = {source} width="100%" height="100%"/>
      </div>
      <hr/>
      <div>
      	<h3 style={{position:"relative"}}>{heading}</h3>
      	<p style={{position:"relative"}}>{text}</p>
      </div>
    </div>
  );
}
