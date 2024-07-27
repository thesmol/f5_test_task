import { atom } from 'recoil';

export interface AuthStateType {
    token: string;
    isAuthenticated: boolean;
}

export const authState = atom<AuthStateType>({
    key: 'authState',
    default: {
        token: localStorage.getItem('token') || '',
        isAuthenticated: !!localStorage.getItem('token')
    },
});