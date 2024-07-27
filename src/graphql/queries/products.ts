import { gql } from '@apollo/client';

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