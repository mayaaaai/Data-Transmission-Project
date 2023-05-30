import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
    const auth = localStorage.getItem('token');
  

  

    return <>{children}</>;
}
