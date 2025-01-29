import React, { useState } from 'react';
import './VehiclesPage.css';

function VehiclesPage({ vehicles, onClose }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleThumbnailClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClosePopup = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="vehicles-page">
      <div className="vehicles-header">
        <h2>Véhicules</h2>
      </div>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index} className="vehicle-card">
            <img
              src={vehicle.photo || 'default-image-url.jpg'}
              alt={vehicle.denomination}
              className="vehicle-photo"
              onClick={() => handleThumbnailClick(vehicle.photo)}
            />
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
      {selectedPhoto && (
        <div className="popup" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={handleClosePopup}>✖</span>
            <img src={selectedPhoto} alt="Selected Vehicle" className="popup-image" />
          </div>
        </div>
      )}
      <button className="close-button" onClick={onClose}>✖</button>
    </div>
  );
}

export default VehiclesPage;
