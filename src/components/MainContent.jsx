// 📄 MainContent.jsx
import React from "react";
import "./MainContent.css";
import logoText from "../assets/logoTextoBarberia.png";

export default function MainContent({ showLogo }) {
  return (
    <div className="main-content">
      {showLogo && (
        <img
          src={logoText}
          alt="Barbería Abellanas"
          className="hero-logo"
        />
      )}
    </div>
  );
}
