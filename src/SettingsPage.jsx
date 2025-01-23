import React, { useState } from 'react';
import './SettingsPage.css';

function SettingsPage({ onBackClick, onAddVehicle }) {
  const [type, setType] = useState('Véhicule');
  const [denomination, setDenomination] = useState('');
  const [immatriculation, setImmatriculation] = useState('');
  const [documentation, setDocumentation] = useState('');
  const [photo, setPhoto] = useState('');
  const [quantity, setQuantity] = useState(''); // New state for quantity

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'Véhicule') {
      onAddVehicle({ denomination, immatriculation, documentation, photo });
    } else if (type === 'Matériel') {
      onAddVehicle({ denomination, quantity, documentation, photo }); // Include quantity
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h2>Ajouter un {type.toLowerCase()}</h2>
        <button className="back-button" onClick={onBackClick}>✖</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>Véhicule</option>
            <option>Matériel</option>
          </select>
        </div>
        <div className="form-group">
          <label>Dénomination:</label>
          <input type="text" value={denomination} onChange={(e) => setDenomination(e.target.value)} />
        </div>
        {type === 'Matériel' && ( // Show quantity field only for Matériel
          <div className="form-group">
            <label>Quantité:</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
        )}
        {type === 'Véhicule' && (
          <div className="form-group">
            <label>Immatriculation:</label>
            <input type="text" value={immatriculation} onChange={(e) => setImmatriculation(e.target.value)} />
          </div>
        )}
        <div className="form-group">
          <label>Lien vers la documentation:</label>
          <input type="url" value={documentation} onChange={(e) => setDocumentation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Photo (URL):</label>
          <input type="url" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default SettingsPage;
