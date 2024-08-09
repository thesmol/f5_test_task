import React, { useEffect, useRef } from 'react'
import { salesOrderTableDataRow } from '../../types'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";

interface PrintTableProps {
    tableData: salesOrderTableDataRow[];
}
export const PrintOrderTable: React.FC<PrintTableProps> = ({ tableData }) => {
    const gridRef = useRef<AgGridReact>(null);

    /**Обработанные данные пепреданной таблицы: добавлен порядковый номер, добавлена единица 
     * измерений к количеству, добавлен рубль к ценам, высчитана финальная цена
     */
    const preparedData = tableData.map((row, index) => ({
        id: index + 1,
        productName: row.product.name,
        quantityWithUnit: `${row.quantity} ${row.product.process.unit.name}`,
        pricePerUnit: row.pricePerUnit,
        total: row.pricePerUnit * row.quantity
    }));

    /**
     * Настройки колонок
     */
    const columnDefs = [
        { headerName: "№", field: "id", width: 50 },
        { headerName: "Наименование", field: "productName", flex: 1 },
        { headerName: "Количество", field: "quantityWithUnit", flex: 1, },
        { headerName: "Цена за ед.", field: "pricePerUnit", flex: 1, valueFormatter: 'value.toLocaleString() + " ₽"' },
        { headerName: "Итого", field: "total", flex: 1, valueFormatter: 'value.toLocaleString() + " ₽"' }
    ];
    /**
     * Настройки колонок по умолчанию
     */
    const defaultColDef = {
        sortable: false,
        filter: false,
        resizable: false,
    }

    useEffect(() => {
        if (gridRef.current && gridRef.current.api) {
            gridRef.current.api.sizeColumnsToFit();
        }
    }, [tableData]);

    return (
        <div className="ag-theme-quartz mt-[8mm]">
            <AgGridReact
                ref={gridRef}
                rowData={preparedData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                domLayout='autoHeight'
                suppressHorizontalScroll={true}
            />
        </div>
    )
};

