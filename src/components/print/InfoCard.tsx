import React from 'react';

interface PrintInfoCardProps {
    // Необязательный компонент для отображения иконки
    icon?: React.ReactNode;
    // Текст, который будет отображаться, если не передан customTextComponent
    text?: string;
    // Заколовок карточки с текстом
    title: string;
    // Необязательный пользовательский компонент для отображения текста
    customTextComponent?: React.ReactNode;
}

/**Компонент для отображения карточки с информацией. Состоит из заголовка, иконки и текста.
 * Если передан customTextComponent, отображаем его, независимо от наличия icon или текста,
 * в других случаях отображается текст и иконка если она есть
 */
export const PrintInfoCard: React.FC<PrintInfoCardProps> = ({
    icon,
    text = "",
    title = "",
    customTextComponent,
}) => {
    return (
        <div className="flex flex-col border-b-[1mm] pb-2 my-2">
            {/* Заголовок карточки */}
            <span className="opacity-85">{title}</span>
            <div className="flex items-center">
                {/* Если передан customTextComponent, отображаем его, независимо от наличия icon */}
                {customTextComponent ? (
                    customTextComponent
                ) : (
                    <>
                        {/* Если передан icon, отображаем его */}
                        {icon && (
                            <div className="mr-2">
                                {icon}
                            </div>
                        )}
                        {/* Отображаем текст */}
                        <p className="font-semibold">{text}</p>
                    </>
                )}
            </div>
        </div>
    );
};
