import React, {FC, ReactNode, useContext} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {AppContext} from "../App/context";

interface ProtectedRouteTypes {
    isOnlyAuth?: boolean;
    children?: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteTypes> = ({children, isOnlyAuth}) => {
    const {isAuth} = useContext(AppContext);

    const location = useLocation();

    if (isOnlyAuth && isAuth) {
        const {from} = location.state || {from: {pathname: '/'}}

        return <Navigate to={from}/>
    }

    if (!isOnlyAuth && !isAuth) {
        return <Navigate to={{pathname: '/login'}} state={{from: location}}/>
    }

    return (
        <>{children}</>
    );
};

export default ProtectedRoute;
