import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRINT_ORDER_BY_ID } from '../../graphql/queries/orders';
import { SalesOrder } from '../../types';
import { orderState } from '../../state/orderState';
import { useRecoilState } from 'recoil';
import { OrderCardsSection } from '../../components/print/CardsSection';
import { PrintHeader } from '../../components/print/Header';
import { PrintOrderTable } from '../../components/print/Table';

interface PrintOrderPageProps {
  orderId: number
}

const PrintOrderPage: React.FC<PrintOrderPageProps> = ({ orderId }) => {
  const { data, loading, error } = useQuery(GET_PRINT_ORDER_BY_ID, {
    variables: { id: orderId },
  });

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

  if (order === null) {
    return <p>Ошибка: заказ не загружен</p>
  }

  return (
    <main className="w-full h-full flex flex-col p-8 justify-start">
      <PrintHeader
        documentType={"Заказ"}
        documentName={order.name}
        subtitle={order.manager.name}
        label={"Ответственный"}
      />
      <OrderCardsSection
        client={order.customer.name}
        shippingDate={order.finishByDate}
        billingAddress={order.billingAddress}
        shippingAddress={order.shippingAddress ?? ""}
        info={order.info}
      />
      <PrintOrderTable
        tableData={order.salesOrderTableData}
      />

      {/* <Footer
        tableData={order.salesOrderTableData}
      /> */}
    </main>
  );
};

export default PrintOrderPage;
