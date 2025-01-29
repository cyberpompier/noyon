import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './ProfilePage.css';

function ProfilePage({ onBackClick }) {
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            setMessage('No user data found.');
          }
        } catch (error) {
          setMessage('Error retrieving user data.');
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      {userData ? (
        <div className="profile-info">
          <p><strong>Nom:</strong> {userData.nom}</p>
          <p><strong>Prénom:</strong> {userData.prenom}</p>
          <p><strong>Grade:</strong> {userData.grade}</p>
          <img src={userData.photo} alt="Profile" className="profile-photo" />
        </div>
      ) : (
        <p>{message}</p>
      )}
      <button className="back-button" onClick={onBackClick}>✖</button>
    </div>
  );
}

export default ProfilePage;
