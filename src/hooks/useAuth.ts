import { useRecoilState } from 'recoil';
import { authState, AuthStateType } from '../state/authState';
import { useMutation } from '@apollo/client';
import { LOGIN, LOGOUT, REGISTER } from '../graphql/mutations/auth';
import { User } from '../types';
import { useState } from 'react';

/**
 * Хук для управления аутентификацией пользователя.
 * 
 * @returns {object} Объект с функциями и состоянием аутентификации
 */
export const useAuth = (): {
    login: (login: string, password: string) => Promise<boolean>;
    register: (user: User) => Promise<boolean>;
    logout: () => void;
    auth: {
        isAuthenticated: boolean;
        token: string;
    };
    error: string | null;
    isAuthLoading: boolean;
    setError: (error: string | null) => void;
} => {
    const [auth, setAuth] = useRecoilState<AuthStateType>(authState);
    const [loginMutation] = useMutation(LOGIN);
    const [registerMutation] = useMutation(REGISTER);
    const [logoutMutation] = useMutation(LOGOUT);

    const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Авторизует пользователя с помощью указанного логина и пароля.
     *
     * @param {string} login - Логин пользователя.
     * @param {string} password - Пароль пользователя.
     * @return {Promise<boolean>} - Промис булевого значения, возвращающий успешность выполнения операции.
     */
    const login = async (login: string, password: string): Promise<boolean> => {
        try {
            setIsAuthLoading(true);
            const { data } = await loginMutation({ variables: { login, password } });
            if (!data || !data.login || !data.login.accessToken) {
                throw new Error('Invalid login response');
            }
            const token = data.login.accessToken;
            localStorage.setItem('token', token);
            setAuth({ token, isAuthenticated: true });
            return true;
        } catch (error: unknown) {
            console.error('Login failed:', error);
            if (error instanceof Error) {
                setError(error.message);
            }
            return false;
        } finally {
            setIsAuthLoading(false);
        }
    };

    /**
     * Регистрирует пользователя с помощью указанных данных пользователя.
     *
     * @param {User | null} userData - Пользовательские данные пользователя.
     * @return {Promise<boolean>} Промис с булевым значением, возвращающий успешность выполнения операции.
     */
    const register = async (userData: User | null): Promise<boolean> => {
        if (!userData) {
            console.error('User data is null');
            return false;
        }
        try {
            setIsAuthLoading(true);
            await registerMutation({ variables: { data: userData } });
            return true;
        } catch (error) {
            console.error('Register failed:', error);
            if (error instanceof Error) {
                setError(error.message);
            }
            return false;
        } finally {
            setIsAuthLoading(false);
        }
    };

    /**
     * Производит выход пользователя из системы путем удаления токена из локального хранилища и обновления состояния аутентификации.
     *
     * @return {Promise<void>} 
     */
    const logout = async (): Promise<void> => {
        try {
            setIsAuthLoading(true);
            await logoutMutation();
            localStorage.removeItem('token');
            setAuth({ token: '', isAuthenticated: false });
        } catch (error) {
            console.error('Logout failed:', error);
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setIsAuthLoading(false);
        }
    };

    return { auth, login, register, logout, isAuthLoading, error, setError };
};