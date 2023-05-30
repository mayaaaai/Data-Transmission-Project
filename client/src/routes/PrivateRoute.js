import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const auth = localStorage.getItem('token');

    return auth ? <>{children}</> : <Navigate to="/login" />;
}
