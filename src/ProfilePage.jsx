import React from 'react';
    import './ProfilePage.css';

    function ProfilePage({ onSettingsClick, onVehiclesClick }) {
      return (
        <div className="profile-page">
          <div className="profile-header">
            <img src="profile.jpg" alt="Profile" className="profile-picture" />
            <div className="profile-info">
              <h2>John Doe</h2>
              <p>Captain</p>
            </div>
          </div>
          <ul className="profile-menu">
            <li>
              <a href="#" className="clickable">
                <span className="icon">🔑</span>
                <span>Connexion</span>
              </a>
            </li>
            <li>
              <a href="#" className="clickable">
                <span className="icon">📋</span>
                <span>Inventaire</span>
              </a>
            </li>
            <li>
              <a href="#" className="clickable" onClick={onVehiclesClick}>
                <span className="icon">🚒</span>
                <span>Véhicules</span>
              </a>
            </li>
            <li>
              <a href="#" className="clickable">
                <span className="icon">🛠️</span>
                <span>Matériels</span>
              </a>
            </li>
            <li>
              <a href="#" className="clickable" onClick={onSettingsClick}>
                <span className="icon">⚙️</span>
                <span>Parametres</span>
              </a>
            </li>
          </ul>
        </div>
      );
    }

    export default ProfilePage;
