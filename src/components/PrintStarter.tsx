import { ReactNode, useRef, ReactElement, cloneElement } from 'react';
import { createPortal } from 'react-dom';
import { useReactToPrint } from 'react-to-print';

interface PrintStarterProps {
  children: ReactNode;   // Содержимое, которое нужно будет напечатать
  trigger: ReactElement; // Элемент, по нажатию на который запускается печать
}

// Универсальный компонент для печати.
// Принимает в качестве пропсов элемент-триггер (trigger) и содержимое для печати (children).
// После нажатия на триггер, содержимое передается в специальный элемент (портал), который рендерится вне основного DOM.
const PrintStarter: React.FC<PrintStarterProps> = ({ children, trigger }) => {
  // Создание ссылки на элемент для печати
  const printRef = useRef<HTMLDivElement>(null);

  // Настройка функции печати с использованием библиотеки useReactToPrint
  const handlePrint = useReactToPrint({
    content: () => printRef.current, // Определение элемента, который будет передан в окно печати
    pageStyle: `
      @media print {
        .hidden {
          display: block !important; // Во время печати отображаются элементы с классом hidden
        }
      }
    `,
  });

  // Клонирование переданного элемента триггера (например, кнопки) и добавление к нему обработчика клика
  const triggerWithHandler = cloneElement(trigger, { onClick: handlePrint });

  return (
    <>
      {/* Элемент для запуска печати. При клике вызывается handlePrint */}
      {triggerWithHandler}

      {/* 
        Печатаемое содержимое рендерится в портале, который вставляется в конец body.
        Это предотвращает попадание контента в основной DOM, сохраняя его изолированным и незаметным до момента печати.
      */}
      {createPortal(
        <div ref={printRef} className='hidden'>
          {children}
        </div>,
        document.body // Портал рендерится в body, что исключает влияние на структуру основного DOM.
      )}
    </>
  );
};

export default PrintStarter;
