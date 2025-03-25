"use client"
import React, { useState } from 'react';
import './page.css';
import { Mic } from 'lucide-react';

const VoiceConverter = () => {
  const [fromLang, setFromLang] = useState('English');
  const [toLang, setToLang] = useState('Hindi');

  const languages = [
    'English',
    'Hindi',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Arabic',
  ];

  return (
    <div className="voice-container">
      <h1 className="brand">Cabit<span className="arrow">↗</span></h1>
      <p className="instruction">Click on the microphone to start recording...</p>

      <div className="mic-button">
        <button className="mic-circle">
          <Mic size={40} color="black" />
        </button>
      </div>

      <div className="converter-section">
        <select
          className="convert-dropdown"
          value={fromLang}
          onChange={(e) => setFromLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>

        <span className="arrow-right">➡️</span>

        <select
          className="convert-dropdown"
          value={toLang}
          onChange={(e) => setToLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VoiceConverter;
