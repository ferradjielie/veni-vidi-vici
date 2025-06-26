// src/components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/connexion'); // redirige vers la page de connexion
  };

  return (
    <button onClick={handleLogout}>
      Se déconnecter
    </button>
  );
};

export default LogoutButton;
