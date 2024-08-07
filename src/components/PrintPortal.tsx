import React, { useEffect, useState, ComponentType } from 'react';
import ReactDOM from 'react-dom';

interface PrintPortalProps<T extends JSX.IntrinsicAttributes> {
    isOpen: boolean;
    onClose: () => void;
    PrintComponent: ComponentType<T>;
    printProps: T;
}

/**
 * Рендерит компонент портала печати, который создает новый элемент div и добавляет его в тело документа.
 * Компонент рендерит предоставленный PrintComponent с предоставленными printProps внутри созданного div.
 * Портал печати только рендерится, когда isOpen равен true.
 * Портал печати удаляется из тела документа, когда isOpen равен false.
 *
 * @param {PrintPortalProps<T>} props - Объект props, содержащий isOpen, onClose, PrintComponent и printProps.
 * @param {boolean} props.isOpen - Логическое значение, указывающее, должен ли быть рендерен портал печати или нет.
 * @param {() => void} props.onClose - Функция, которая будет вызвана при закрытии портала печати.
 * @param {ComponentType<T>} props.PrintComponent - Компонент, который будет рендериться внутри портала печати.
 * @param {T} props.printProps - Пропсы, которые будут переданы PrintComponent.
 * @return {React.ReactPortal | null} Рендерится портал печати как React-портал, или null, если isOpen равен false.
 */
function PrintPortal<T extends JSX.IntrinsicAttributes>({
    isOpen,
    onClose,
    PrintComponent,
    printProps
}: PrintPortalProps<T>): React.ReactPortal | null {
    const [container] = useState(() => {
        const div = document.createElement('div');
        div.classList.add('printable');
        return div;
    });

    useEffect(() => {
        if (isOpen) {
            document.body.appendChild(container);
            window.print();
            onClose();
            return () => {
                document.body.removeChild(container);
            };
        }
    }, [isOpen, container, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <PrintComponent {...printProps} />,
        container
    );
}

export default PrintPortal;
