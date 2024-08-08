import { atom } from 'recoil';
import { SalesOrder } from '../types';

/**
 * Атом Recoil для хранения состояния заказа
 */
export const orderState = atom<SalesOrder | null>({
    key: 'orderState',
    default: null,
});