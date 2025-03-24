"use client";

import { useState } from "react";
import "./form.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    phone: "",
    issue: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/route?model=contactus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: formData.firstName + " " + formData.secondName,
          email: formData.email,
          user_phone: formData.phone,
          issue: formData.issue,
          query: formData.message,
        }),
      });

      if (res.ok) {
        alert("Query submitted successfully!");
        setFormData({
          firstName: "",
          secondName: "",
          email: "",
          phone: "",
          issue: "",
          message: "",
        });
      } else {
        alert("Failed to submit query!");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting query!");
    }
  };

  return (
    <div className="ContactForm_Container">
      <form onSubmit={handleSubmit} style={{ height: "100% !important" }}>
        <div className="Input_Row">
          <div className="Input_Option">
            <p>First Name</p>
            <input
              className="TrasparentInput"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Input_Option">
            <p>Second Name</p>
            <input
              className="TrasparentInput"
              type="text"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <br /><br />

        <div className="Input_Row">
          <div className="Input_Option">
            <p>Email</p>
            <input
              className="TrasparentInput"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Input_Option">
            <p>Phone Number</p>
            <input
              className="TrasparentInput"
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <br /><br />
        <h6 style={{ fontWeight: "bold", textAlign: "left" }}>
          Select One of the Options
        </h6>
        <br />

        <div className="Input_Row">
          <div className="radio-group">
            {["Trip Issue", "Cab Issue", "Payment Issue", "App Issue", "Other"].map((option) => (
              <label className="radio-option" key={option}>
                <input
                  type="radio"
                  name="issue"
                  value={option}
                  checked={formData.issue === option}
                  onChange={handleChange}
                  required
                />
                <span className="custom-radio"></span>
                {option}
              </label>
            ))}
          </div>
        </div>

        <br /><br />

        <div className="Input_Option">
          <p>Message</p>
          <textarea
            className="TrasparentInput"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <br />
        <input className="ppmmmoonn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

