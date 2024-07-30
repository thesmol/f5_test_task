import { atom } from 'recoil';
import { Product } from '../types';

/**
 * Атом Recoil для хранения списка продуктов
 */
export const productsState = atom<Product[] | []>({
    key: 'productsState',
    default: [],
});