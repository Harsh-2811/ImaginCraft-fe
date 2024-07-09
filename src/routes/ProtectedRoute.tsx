import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const userToken = localStorage.getItem('user-token');
  const location = useLocation();

  if (!userToken) {
    return (
      <Navigate 
        to="/sign-in" 
        state={{ from: location, loginPopup: true }} 
        replace 
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;