import React from 'react';
import './VehiclesPage.css';

function VehiclesPage({ vehicles, onClose }) {
  return (
    <div className="vehicles-page">
      <div className="vehicles-header">
        <h2>Véhicules</h2>
        <button className="close-button" onClick={onClose}>✖</button>
      </div>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index} className="vehicle-card">
            <img src={vehicle.photo} alt={vehicle.denomination} className="vehicle-photo" />
            <div className="vehicle-info">
              <h3>{vehicle.denomination}</h3>
              <p>Immatriculation: {vehicle.immatriculation}</p>
              <p>
                <a href={vehicle.documentation} target="_blank" rel="noopener noreferrer">
                  Documentation
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehiclesPage;
