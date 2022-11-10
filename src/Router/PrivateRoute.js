import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Pages/Auth/AuthContext';
import { Bars } from 'react-loader-spinner'
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(UserContext)
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    if (loading) {
        return <div className="mx-auto w-10">
            <Bars
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }
    return children
};

export default PrivateRoute;