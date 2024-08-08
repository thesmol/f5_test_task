import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRINT_ORDER_BY_ID } from '../../graphql/queries/orders';
import { SalesOrder } from '../../types';
import { orderState } from '../../state/orderState';
import { useRecoilState } from 'recoil';

interface PrintOrderPageProps {
  orderId: number
}

const PrintOrderPage: React.FC<PrintOrderPageProps> = ({ orderId }) => {
  const { data, loading, error } = useQuery(GET_PRINT_ORDER_BY_ID, {
    variables: { id: orderId },
  });

  console.log(data);

  const [order, setOrder] = useRecoilState<SalesOrder | null>(orderState);

  useEffect(() => {
    if (!loading && !error) {
      setOrder({
        ...data.salesOrder,
        salesOrderTableData: data.salesOrderTableData,
      });
    }
  }, [data, loading, error, setOrder]);

  if (error) {
    return <p>Ошибка: {error.message}</p>
  }
  console.log(order)

  return (
    <div>
      Страница печати
      Табличка для примера:
    </div>
  );
};

export default PrintOrderPage;
