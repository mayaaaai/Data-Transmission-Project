import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const auth = localStorage.getItem('email');

   if(!auth) {
    alert("You must be logged in to view this page.");
   return <Navigate to="/login" />;}

    else{
    return <>{children}</> 
}

}
