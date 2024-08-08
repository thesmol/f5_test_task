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

interface SalesTableRow {
    // Наименование
    name: string;

    archived: boolean;

    process: {
        unit: {
            // Единица измерения (шт)
            name: string
        }
    };
    // Количество
    quantity: number;
    // Цена за единицу
    pricePerUnit: number;
}

export interface SalesOrder {
    id: number;
    // Название заказа (SO-1)
    name: string;

    // Дата отгрузки
    finishByDate: Date;
    // Прогноз даты отгрузки
    orderReadyDate: Date;

    // Адрес организации
    billingAddress: string;

    // Адрес грузополучателя
    shippingAddress: string;

    // Описание
    info?: string;

    archived: boolean;

    // Клиент
    customer: {
        name: string
    };
    // Ответсвенный
    manager: {
        name: string
    };

    salesOrderTableData: [SalesTableRow]
}
