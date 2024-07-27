import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState, AuthStateType } from '../state/authState';

const PrivateRoute: React.FC = () => {
    const auth = useRecoilValue<AuthStateType>(authState);

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
