import { useRecoilState } from 'recoil';
import { authState } from '../state/authState';
import { useMutation } from '@apollo/client';
import { LOGIN, LOGOUT, REGISTER } from '../graphql/mutations/auth';
import { User } from '../types';

export const useAuth = () => {
    const [auth, setAuth] = useRecoilState(authState);
    const [loginMutation] = useMutation(LOGIN);
    const [registerMutation] = useMutation(REGISTER);
    const [logoutMutation] = useMutation(LOGOUT);


    const login = async (login: string, password: string) => {
        try {
            const { data } = await loginMutation({ variables: { login, password } });
            if (!data || !data.login || !data.login.accessToken) {
                throw new Error('Invalid login response');
            }
            const token = data.login.accessToken;
            localStorage.setItem('token', token);
            setAuth({ token, isAuthenticated: true });
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const register = async (userData: User | null) => {
        if (!userData) {
            console.error('User data is null');
            return;
        }
        try {
            await registerMutation({ variables: { data: userData } });
        } catch (error) {
            console.error('Register failed:', error);
        }
    };

    const logout = async () => {
        try {
            await logoutMutation();
            localStorage.removeItem('token');
            setAuth({ token: '', isAuthenticated: false });
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return { auth, login, register, logout };
};