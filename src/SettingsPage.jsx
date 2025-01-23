import React, { useState } from 'react';
import './SettingsPage.css';

function SettingsPage({ onBackClick, onAddVehicle, onAddMaterial }) {
  const [type, setType] = useState('Véhicule');
  const [denomination, setDenomination] = useState('');
  const [immatriculation, setImmatriculation] = useState('');
  const [vehicleType, setVehicleType] = useState('INCENDIE'); // New state for vehicle type
  const [documentation, setDocumentation] = useState('');
  const [photo, setPhoto] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'Véhicule') {
      onAddVehicle({ denomination, immatriculation, vehicleType, documentation, photo });
    } else if (type === 'Matériel') {
      onAddMaterial({ denomination, quantity, documentation, photo });
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
        {type === 'Véhicule' && (
          <>
            <div className="form-group">
              <label>Immatriculation:</label>
              <input type="text" value={immatriculation} onChange={(e) => setImmatriculation(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Type de véhicule:</label>
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                <option>INCENDIE</option>
                <option>SANITAIRE</option>
                <option>OPERATION DIV.</option>
              </select>
            </div>
          </>
        )}
        {type === 'Matériel' && (
          <div className="form-group">
            <label>Quantité:</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
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
