import React from 'react';
import { Route, Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
    const auth = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if (auth) {
        if (role === 'admin') {
            return <Navigate to="/game-shop" replace={true} />;
        } else {
            return <Navigate to="/gamer-view" replace={true} />;
        }
    }

    return <>{children}</>;
}
