"use client"
import React, { useState } from 'react';
import './BookForm.css';
import CarOptions from './carOptions';
import { env } from "../../data/env/client"
import { z } from "zod"




export default function BookForm({ onFormSubmit }) {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const [showStartDropdown, setShowStartDropdown] = useState(false);
  const [showEndDropdown, setShowEndDropdown] = useState(false);





  const hereApiKey = env.NEXT_PUBLIC_HERE_API_KEY;
 





//Fetch suggestions from HERE API
  const fetchHereSuggestions = async (query) => {
    if (!query) return [];
    const url = `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${encodeURIComponent(query)}&limit=5&apiKey=${hereApiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.items.map((item) => item.address.label);
    } catch (err) {
      console.error("HERE Suggestion Fetch Error:", err);
      return [];
    }
  };

  //Handle start location input change
  const handleStartChange = async (e) => {
    const value = e.target.value;
    setStartLocation(value);

    if (value.length > 2) {
      const suggestions = await fetchHereSuggestions(value);
      setStartSuggestions(suggestions);
      setShowStartDropdown(true);
    } else {
      setShowStartDropdown(false);
    }
  };

  //Handle end location input change
  const handleEndChange = async (e) => {
    const value = e.target.value;
    setEndLocation(value);

    if (value.length > 2) {
      const suggestions = await fetchHereSuggestions(value);
      setEndSuggestions(suggestions);
      setShowEndDropdown(true);
    } else {
      setShowEndDropdown(false);
    }
  };

  //On selecting a suggestion from dropdown
  const selectStartLocation = (location) => {
    setStartLocation(location);
    setShowStartDropdown(false);
  };

  const selectEndLocation = (location) => {
    setEndLocation(location);
    setShowEndDropdown(false);
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(startLocation, endLocation);
  };

  return (
    <div className="book-form-container">
      <div className="glass-card p-4">
        <h2 className="text-center mb-3">Book Your Ride</h2>

        {/* Booking Form */}
        <form onSubmit={handleSubmit}>
          {/* Start Location Input */}
          <div className="mb-3 position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Location"
              value={startLocation}
              onChange={handleStartChange}
            />

            {/* Start Location Suggestions Dropdown */}
            {showStartDropdown && (
              <ul className="list-group suggestion-dropdown">
                {startSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    onClick={() => selectStartLocation(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/*End Location Input */}
          <div className="mb-3 position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Destination"
              value={endLocation}
              onChange={handleEndChange}
            />

            {/* End Location Suggestions Dropdown */}
            {showEndDropdown && (
              <ul className="list-group suggestion-dropdown">
                {endSuggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="list-group-item"
                    onClick={() => selectEndLocation(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

         
        <div className="d-flex gap-2 mb-3">
          <input 
            className="form-control" 
            type="date" 
            defaultValue={new Date().toISOString().split('T')[0]} 
          />
          <select className="form-control">
            <option>Language</option>
          </select>
        </div>


          <button type="submit" className="btn btn-warning w-100">
            See Prices
          </button>
        </form>
      </div>

      {/* Car Options Component */}
      <CarOptions />
    </div>
  );
}
