export interface Product {
    id: number,
    name: string,
    company: {
        name: string
    },
    defaultBuyPrice: number,
    defaultSellPrice: number
}

export interface User {
    email: string
    phone?: string
    name: string
    password: string
    userRoleId: number
    leaders: [number]
}