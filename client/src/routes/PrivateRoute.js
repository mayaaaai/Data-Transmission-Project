import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const auth = localStorage.getItem('email');

    return auth ? <>{children}</> : <Navigate to="/login" />;
}
