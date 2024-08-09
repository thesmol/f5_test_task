
import React from 'react'

// Пропсы, которые принимает компонент заголовка для печати
interface PrintHeaderProps {
    // Название печатываемого элемента, которое будем выводить в заголовке (например номер заказа)
    documentType: string;
    // Название печатываемого элемента, которое будем выводить в заголовке (например номер заказа)
    documentName: string;
    // Текст подзаголовка, например имя менеджера
    subtitle: string;
    // Подпись сабзаголовка, например "Ответственный" для заказа
    label: string;
}

// Компонент для печати заголовка, который будет отображать информацию о заказе и менеджере
export const PrintHeader: React.FC<PrintHeaderProps> = ({
    documentType,
    documentName,
    subtitle,
    label
}) => {
    return (
        // Контейнер для заголовка
        <header className="flex justify-between items-center border-b-[1mm] mb-3">
            {/* Блок с информацией о заказе */}
            <div className="flex flex-col">
                {/* Тип печатываемого документа */}
                <p className="opacity-85">{documentType}</p>
                {/* Название кокнретного документа*/}
                <h1 className="text-3xl font-semibold">{documentName}</h1>
            </div>
            {/* Блок с дополнительной информацией */}
            <p>{label}: <strong>{subtitle}</strong></p>
        </header>
    )
}

