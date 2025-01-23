import React from 'react';
    import './VehiclesPage.css';

    function VehiclesPage({ vehicles }) {
      return (
        <div className="vehicles-page">
          <h2>Véhicules</h2>
          <ul>
            {vehicles.map((vehicle, index) => (
              <li key={index}>
                <h3>{vehicle.denomination}</h3>
                <p>Immatriculation: {vehicle.immatriculation}</p>
                <p>
                  <a href={vehicle.documentation} target="_blank" rel="noopener noreferrer">
                    Documentation
                  </a>
                </p>
                <img src={vehicle.photo} alt={vehicle.denomination} />
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default VehiclesPage;
