import React, { useState } from 'react';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import VehiclesPage from './VehiclesPage';
import MaterialsPage from './MaterialsPage';

function App() {
  const [page, setPage] = useState('home');
  const [vehicles, setVehicles] = useState([]);
  const [materials, setMaterials] = useState([]);

  const addVehicle = (vehicle) => {
    setVehicles([...vehicles, vehicle]);
    setPage('vehicles');
  };

  const addMaterial = (material) => {
    setMaterials([...materials, material]);
    setPage('materials');
  };

  return (
    <div className="app">
      {page === 'home' && <HomePage onGoClick={() => setPage('profile')} />}
      {page === 'profile' && (
        <ProfilePage
          onSettingsClick={() => setPage('settings')}
          onVehiclesClick={() => setPage('vehicles')}
          onMaterialsClick={() => setPage('materials')}
        />
      )}
      {page === 'settings' && <SettingsPage onBackClick={() => setPage('profile')} onAddVehicle={addVehicle} onAddMaterial={addMaterial} />}
      {page === 'vehicles' && <VehiclesPage vehicles={vehicles} onClose={() => setPage('profile')} />}
      {page === 'materials' && <MaterialsPage materials={materials} onClose={() => setPage('profile')} />}
      {page === 'home' && (
        <footer>
          Bienvenu dans l'application de vérification des inventaires des véhicules sapeur pompier.
        </footer>
      )}
    </div>
  );
}

export default App;
