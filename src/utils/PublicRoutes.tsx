import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const AuthRoutes = () => {
    const userData = useSelector((state: any) => state.auth);
    return (
        userData.isAuthenticated ? <Navigate to="/" /> : <Outlet />
    )
}

export default AuthRoutes