import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const PrivateRoutes = () => {

    const userData = useSelector((state:any) => state.auth);
    console.log('userData: ',userData)
    return (
        userData.isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes