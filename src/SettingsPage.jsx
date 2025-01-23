import React, { useState } from 'react';
import './SettingsPage.css';

function SettingsPage({ onBackClick, onAddVehicle, onAddMaterial, vehicles }) {
  const [type, setType] = useState('Véhicule');
  const [denomination, setDenomination] = useState('');
  const [immatriculation, setImmatriculation] = useState('');
  const [vehicleType, setVehicleType] = useState('INCENDIE');
  const [documentation, setDocumentation] = useState('');
  const [photo, setPhoto] = useState('');
  const [quantity, setQuantity] = useState('');
  const [affection, setAffection] = useState('');
  const [emplacement, setEmplacement] = useState('');

  // Mapping of vehicle types to emplacement options
  const emplacementOptions = {
    FPT: ['Cabine', 'Canine AR','Coffre AVG','Coffre MG','Coffre ARG','Coffre AVD','Coffre MG','Coffre ARG','Rideau AR','Toit'],
    EPA: ['Cabine', 'Cellule','Plateforme','Coffre AVG','Coffre MG','Coffre ARG','Coffre AVD','Coffre MD','Coffre ARD'],
    VSAV: ['Cabine', 'Coffre G','Coffre D','Cellule','Cellule ARG','Cellule MG','Cellule AVG','Cellule ARD','Cellule MD','Cellule AVD','Tiroir VERT','Tiroir ROUGE','Tiroir ORANGE','Tiroir Blanc'],
    VSR: ['Cabine', 'Canine AR','Coffre AVG','Coffre MG','Coffre ARG','Coffre AVD','Coffre MG','Coffre ARG','Rideau']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'Véhicule') {
      onAddVehicle({ denomination, immatriculation, vehicleType, documentation, photo });
    } else if (type === 'Matériel') {
      onAddMaterial({ denomination, quantity, affection, emplacement, documentation, photo });
    }
  };

  // Determine emplacement options based on affection
  const getEmplacementOptions = () => {
    if (affection.startsWith('FPT')) {
      return emplacementOptions['FPT'];
    }
    if (affection.startsWith('VSAV')) {
      return emplacementOptions['VSAV'];
    }
    return emplacementOptions[affection] || [];
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
          <>
            <div className="form-group">
              <label>Quantité:</label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Affection:</label>
              <select value={affection} onChange={(e) => setAffection(e.target.value)}>
                <option value="">-- Select Vehicle --</option>
                {vehicles.map((vehicle, index) => (
                  <option key={index} value={vehicle.denomination}>{vehicle.denomination}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Emplacement:</label>
              <select value={emplacement} onChange={(e) => setEmplacement(e.target.value)}>
                <option value="">-- Select Emplacement --</option>
                {getEmplacementOptions().map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </>
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
