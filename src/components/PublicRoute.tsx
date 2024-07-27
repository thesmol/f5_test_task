import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState, AuthStateType } from '../state/authState';

const PublicRoute: React.FC = () => {
    const auth = useRecoilValue<AuthStateType>(authState);

    return auth.isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;