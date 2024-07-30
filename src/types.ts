/**
 * Интерфейс, описывающий структуру продукта
 */
export interface Product {
    id: number;
    name: string;
    company: {
        name: string,
    };
    defaultBuyPrice: number;
    defaultSellPrice: number;
}

/**
 * Интерфейс, описывающий структуру пользователя
 */
export interface User {
    email: string;
    phone?: string;
    name: string;
    password: string;
    userRoleId: number | null;
    leaders: [number] | [];
}