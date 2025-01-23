import React, { useState } from 'react';
    import HomePage from './HomePage';
    import ProfilePage from './ProfilePage';
    import SettingsPage from './SettingsPage';
    import VehiclesPage from './VehiclesPage';

    function App() {
      const [page, setPage] = useState('home');
      const [vehicles, setVehicles] = useState([]);

      const addVehicle = (vehicle) => {
        setVehicles([...vehicles, vehicle]);
        setPage('vehicles');
      };

      return (
        <div className="app">
          {page === 'home' && <HomePage onGoClick={() => setPage('profile')} />}
          {page === 'profile' && <ProfilePage onSettingsClick={() => setPage('settings')} onVehiclesClick={() => setPage('vehicles')} />}
          {page === 'settings' && <SettingsPage onBackClick={() => setPage('profile')} onAddVehicle={addVehicle} />}
          {page === 'vehicles' && <VehiclesPage vehicles={vehicles} />}
          {page === 'home' && (
            <footer>
              Bienvenu dans l'application de vérification des inventaires des véhicules sapeur pompier.
            </footer>
          )}
        </div>
      );
    }

    export default App;
