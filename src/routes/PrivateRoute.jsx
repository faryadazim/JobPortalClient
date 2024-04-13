import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const isLogged =  localStorage.getItem('token'); 
    return isLogged ? children : <Navigate to="/" />
}

export default PrivateRoute;