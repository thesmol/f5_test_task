import { atom } from 'recoil';
import { Product } from '../types';

export const productsState = atom<Product[]>({
    key: 'productsState',
    default: [],
});