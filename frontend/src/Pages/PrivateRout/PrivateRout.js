import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthPro/AuthPro';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <h1>Loading....</h1>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/Login" state={{ from: location }} replace></Navigate>
};

export default PrivateRout;
