import { gql } from '@apollo/client';

/**
 * Запрос для получения данных по конкретному заказу
 * для дальнейшей печати
 */
export const GET_PRINT_ORDER_BY_ID = gql`
  query SalesOrder($id: Int!) {
  salesOrder(id: $id) {
    name
    finishByDate
    shippingAddress
    billingAddress
    info
    archived
    orderReadyDate
    customer {
      name
    }
    manager {
      name
    }
  }
  salesOrderTableData(id: $id) {
    product {
      name
      archived
      process {
        unit {
          name
        }
      }
    }
    quantity
    pricePerUnit
  }
}
`;