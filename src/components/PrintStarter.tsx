import { ReactNode, useRef, ReactElement, cloneElement } from 'react';
import { useReactToPrint } from 'react-to-print';

interface PrintStarterProps {
  children: ReactNode;
  trigger: ReactElement;
}

// Универсальный компонент для печати. 
// Принимает React-ноды в качестве детей и любой элемент для запуска печати.
// При нажатии на элемент для запуска печати вызывается функция для печати, которая применяет стили для печати к заданному элементу.
// В качестве стилей для печати используется media print, который показывает элементы, скрытые на странице с классом hidden.
const PrintStarter: React.FC<PrintStarterProps> = ({ children, trigger }) => {
  // Создание ссылки на элемент для печати
  const printRef = useRef<HTMLDivElement>(null);

  // Функция для печати. Применяет стили для печати к элементу printRef
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    // Стили для печати. Показывает ранее скрытый со страницы элемент для его отобюражения в окне печати.
    pageStyle: `
        @media print {
          .hidden {
            display: block !important;
          }
        }
      `,
  });

  // Клонирование переданного элемента и добавление к нему обработчика клика
  const triggerWithHandler = cloneElement(trigger, { onClick: handlePrint });

  return (
    <>
      {/* Элемент для запуска печати */}
      {triggerWithHandler}
      {/* Элемент для печати. Скрыт */}
      <div ref={printRef} className='hidden'>
        {children}
      </div>
    </>
  );
};

export default PrintStarter;
