import React from 'react';
import './MaterialsPage.css';

function MaterialsPage({ materials, onClose }) {
  return (
    <div className="materials-page">
      <div className="materials-header">
        <h2>Matériels</h2>
        <button className="close-button" onClick={onClose}>✖</button>
      </div>
      <ul>
        {materials.map((material, index) => (
          <li key={index} className="material-card">
            <img src={material.photo || 'default-image-url.jpg'} alt={material.denomination} className="material-photo" />
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
    </div>
  );
}

export default MaterialsPage;
