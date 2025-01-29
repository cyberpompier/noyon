import React, { useState } from 'react';
import './MaterialsPage.css';

function MaterialsPage({ materials, onClose }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleThumbnailClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleClosePopup = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="materials-page">
      <div className="materials-header">
        <h2>Matériels</h2>
      </div>
      <ul>
        {materials.map((material, index) => (
          <li key={index} className="material-card">
            <img
              src={material.photo || 'default-image-url.jpg'}
              alt={material.denomination}
              className="material-photo"
              onClick={() => handleThumbnailClick(material.photo)}
            />
            <div className="material-info">
              <h3>{material.denomination}</h3>
              <p>Quantité: {material.quantity}</p>
              <p>
                <a href={material.documentation} target="_blank" rel="noopener noreferrer">
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
            <img src={selectedPhoto} alt="Selected Material" className="popup-image" />
          </div>
        </div>
      )}
      <button className="close-button" onClick={onClose}>✖</button>
    </div>
  );
}

export default MaterialsPage;
