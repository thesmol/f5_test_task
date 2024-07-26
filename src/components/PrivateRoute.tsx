import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState } from '../state/authState';

const PrivateRoute: React.FC = () => {
    const auth = useRecoilValue(authState);

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
