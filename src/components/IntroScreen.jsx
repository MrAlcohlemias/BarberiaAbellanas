// 📄 IntroScreen.jsx

import React, { useState } from "react";
import "./IntroScreen.css";
import logoBarberia from "../assets/logoBarberiaABellanas.png";

export default function IntroScreen({ onStart, onPlayVideo }) {
  const [closing, setClosing] = useState(false);
  const [buttonDisappear, setButtonDisappear] = useState(false);

  const handleClick = () => {
    setClosing(true); 

    setTimeout(() => {
      setButtonDisappear(true);
      onPlayVideo(); 
    }, 1000);

    setTimeout(() => {
      onStart();
    }, 1800); 
  };

  return (
    <div className={`intro-screen ${closing ? "closing" : ""}`}>
      <button
        className={`start-button ${buttonDisappear ? "disappearing" : ""}`}
        onClick={handleClick}
      >
        <img
          src={logoBarberia}
          alt="Logo Barbería Abellanas"
          className="button-logo"
        />
      </button>
      <div className="background-glow"></div>
    </div>
  );
}
