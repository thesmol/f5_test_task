import { atom } from 'recoil';

/**
 * Тип состояния аутентификации
 */
export interface AuthStateType {
    token: string;
    isAuthenticated: boolean;
}

/**
 * Атом Recoil для хранения состояния аутентификации
 */
export const authState = atom<AuthStateType>({
    key: 'authState',
    default: {
        token: localStorage.getItem('token') || '',
        isAuthenticated: !!localStorage.getItem('token')
    },
});