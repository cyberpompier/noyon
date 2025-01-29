import React, { useState } from 'react';
import './HomePage.css';

function HomePage({ onGoClick, onSettingsClick, onVehiclesClick, onMaterialsClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="home-page">
      <header className="app-header">
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <span className="menu-icon">☰</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>Connexion</li>
              <li onClick={onGoClick}>Profile</li>
              <li onClick={onSettingsClick}>Settings</li>
              <li onClick={onVehiclesClick}>Vehicles</li>
              <li onClick={onMaterialsClick}>Materials</li>
            </ul>
          )}
        </div>
        <h1>iVerif</h1>
      </header>
      <div className="welcome-frame">
        Bienvenu dans l'application de vérification des inventaires des véhicules sapeur pompier.
      </div>
    </div>
  );
}

export default HomePage;
