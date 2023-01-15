import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const token = JSON.parse(localStorage.getItem('token') || '');
    return token && true
}

export const ProtectedRoutes = () => {
    const isAuth  = useAuth()
    return isAuth ? <Outlet/>  : <Navigate to="/"/>
};
