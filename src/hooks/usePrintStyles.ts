import { useEffect } from 'react';

/**
 * Пользовательская хук, добавляющий стили для печати в документ.
 *
 * Эта функция создает новый элемент стиля и устанавливает его innerHTML в стили для печати.
 * Затем она добавляет элемент стиля в заголовок документа.
 * Элемент стиля удаляется из заголовка документа при размонтировании компонента.
 *
 * @return {void} Эта функция не возвращает ничего.
 */
const usePrintStyles = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @page {
                size: auto;
                margin: 0mm;
            }

            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                }

                /* Скрыть элементы, добавляемые по умолчанию */
                @page {
                    margin: 0;
                }

                /* Скрыть верхний колонтитул и нижний колонтитул */
                @page {
                    size: auto;
                    margin: 0;
                }

                body {
                    margin: 0;
                }

                /* Отклить стандартные колонтитулы браузера */
                @page {
                    margin: 0mm;
                }
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
};

export default usePrintStyles;
