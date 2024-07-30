import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState, AuthStateType } from '../state/authState';

/**
 * Компонент для защиты маршрутов, требующих аутентификации.
 * Перенаправляет на страницу входа, если пользователь не аутентифицирован.
 *
 * @returns Защищенный маршрут или перенаправление на страницу входа
 */
const PrivateRoute: React.FC = () => {
    const auth = useRecoilValue<AuthStateType>(authState);

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
