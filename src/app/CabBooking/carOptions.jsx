import './BookForm.css';

import { useState } from "react";
const cars = ["Mini", "Prime Sedan", "Prime SUV"];




export default function CarOptions() {
  const [selected, setSelected] = useState(null);

return (
<div className="p-5 bg-light rounded">
      <div className="car-scroll d-flex">
        {cars.map((car, index) => (
          <div
            key={index}
             onClick={() => setSelected(selected === index ? null : index)}
            className={`car-bubble d-flex align-items-center p-3 me-3 ${
              selected === index ? "selected" : ""
            }`}
          >
            <img
              src="https://placehold.co/60x60"
              alt={`${car} car`}
              className="rounded-circle me-3 border"
            />
            <div>
              <h5 className="mb-1 fw-semibold">{car}</h5>
              <small className="text-muted d-block mb-2">
                {car === "Mini"
                  ? "Comfy, economical cars"
                  : car === "Prime Sedan"
                  ? "Spacious sedans, top drivers"
                  : "Spacious SUVs"}
              </small>
              <div className="d-flex gap-3">
                <span className="fw-semibold text-primary">$20</span>
                <span className="text-muted">2 min</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
	);
}