import React from 'react'
import { PrintInfoCard } from './InfoCard';
import { PrintBage } from './Badge';
import { format } from 'date-fns';

interface OrderCardsSectionProps {
    // Имя клиента
    client: string;
    // Дата отгрузки
    shippingDate: Date;
    // Адрес организации
    billingAddress: string;
    // Адрес грузополучателя. Необязательный параметр
    shippingAddress?: string;
    // Описание заказа. Необязательный параметр
    info?: string;
}

export const OrderCardsSection: React.FC<OrderCardsSectionProps> = ({
    client,
    shippingDate,
    billingAddress,
    shippingAddress,
    info
}) => {
    /** Достаем дату и форматируем ее в понятный вид */
    const finishedDate = new Date(shippingDate)
    const formattedDate = format(finishedDate, 'dd.MM.yyyy')

    // Определяем адрес по условию
    let address: string = "";
    // Если адрес грузополучателя задан и не совпадает с адресом организации
    if (shippingAddress && shippingAddress !== billingAddress) {
        address = shippingAddress;
    } else {
        // В противном случае устанавливаем адрес как "Совпадает с адресом организации"
        address = "Совпадает с адресом организации";
    }

    return (
        <article className="flex flex-col">
            <section className="grid grid-cols-2 grid-rows-2 gap-8">
                {/* Карточка с информацией о клиенте */}
                <PrintInfoCard
                    title={'Клиент'}
                    customTextComponent={<PrintBage text={client} />}
                />
                {/* Карточка с информацией о дате отгрузки */}
                <PrintInfoCard
                    title={'Дата отгрузки'}
                    icon={<img src={"./exclamation-circle.svg"} alt="" className="h-[13px] w-[13px]" />}
                    text={formattedDate}
                />
                {/* Карточка с информацией об адресе организации */}
                <PrintInfoCard
                    title={'Адрес организации'}
                    text={billingAddress ? billingAddress : "Нет адреса"}
                />
                {/* Карточка с информацией об адресе грузополучателя */}
                <PrintInfoCard
                    title={'Адрес грузополучателя'}
                    text={address ? address : "Нет адреса"}
                />
            </section>
            <section className="my-3">
                {/* Карточка с информацией о заказе */}
                <PrintInfoCard
                    title={'Описание'}
                    text={info ? info : "Нет описания"}
                />
            </section>
        </article>
    )
}
