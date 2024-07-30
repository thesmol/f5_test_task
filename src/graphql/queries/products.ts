import { gql } from '@apollo/client';

/**
 * Запрос для получения списка продуктов
 */
export const GET_PRODUCTS = gql`
  query{
    products{
        id, 
        name, 
        company {
        name
        }, 
        defaultBuyPrice, 
        defaultSellPrice
    }
}
`;