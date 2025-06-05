import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to={'/auth/signin'} state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoute;