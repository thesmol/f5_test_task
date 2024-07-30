import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authState, AuthStateType } from '../state/authState';

/**
 * Компонент для публичных маршрутов.
 * Перенаправляет на дашборд, если пользователь уже аутентифицирован.
 *
 * @returns Публичный маршрут или перенаправление на дашборд
 */
const PublicRoute: React.FC = () => {
    const auth = useRecoilValue<AuthStateType>(authState);

    return auth.isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;