import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import VehiclesPage from './VehiclesPage';
import MaterialsPage from './MaterialsPage';
import LoginPage from './LoginPage';
import './App.css';

function App() {
  const [page, setPage] = useState('login');
  const [vehicles, setVehicles] = useState([]);
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const querySnapshot = await getDocs(collection(db, 'vehicles'));
      setVehicles(querySnapshot.docs.map(doc => doc.data()));
    };

    const fetchMaterials = async () => {
      const querySnapshot = await getDocs(collection(db, 'materials'));
      setMaterials(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchVehicles();
    fetchMaterials();
  }, []);

  const addVehicle = async (vehicle) => {
    await addDoc(collection(db, 'vehicles'), vehicle);
    setVehicles([...vehicles, vehicle]);
    setPage('vehicles');
  };

  const addMaterial = async (material) => {
    await addDoc(collection(db, 'materials'), material);
    setMaterials([...materials, material]);
    setPage('materials');
  };

  return (
    <div className="app">
      {page === 'login' && <LoginPage onLoginSuccess={() => setPage('home')} />}
      {page === 'home' && (
        <HomePage
          onGoClick={() => setPage('profile')}
          onSettingsClick={() => setPage('settings')}
          onVehiclesClick={() => setPage('vehicles')}
          onMaterialsClick={() => setPage('materials')}
        />
      )}
      {page === 'profile' && <ProfilePage onBackClick={() => setPage('home')} />}
      {page === 'settings' && (
        <SettingsPage
          onBackClick={() => setPage('home')}
          onAddVehicle={addVehicle}
          onAddMaterial={addMaterial}
          vehicles={vehicles} // Pass vehicles to SettingsPage
        />
      )}
      {page === 'vehicles' && <VehiclesPage vehicles={vehicles} onClose={() => setPage('home')} />}
      {page === 'materials' && <MaterialsPage materials={materials} onClose={() => setPage('home')} />}
      <footer className="app-footer">
        &copy; 2023 Fire Truck Inventory. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
