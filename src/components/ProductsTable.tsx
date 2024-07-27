import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries/products";
import { useEffect } from "react";
import { productsState } from "../state/productsState";
import { useRecoilState } from "recoil";
import { Box } from "@mui/material";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef, ValueGetterParams, ValueSetterParams } from 'ag-grid-community';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Product } from "../types";

const ProductsTable: React.FC = () => {
    const { data, loading } = useQuery(GET_PRODUCTS);
    const [products, setProducts] = useRecoilState<Product[]>(productsState);

    useEffect(() => {
        if (!loading) {
            setProducts(data.products);
        }
    }, [data, loading, setProducts]);

    const columns: ColDef<Product>[] = [
        { headerName: "ID", field: "id" as keyof Product },
        { headerName: "Название", field: "name" as keyof Product },
        {
            headerName: "Компания",
            valueGetter: (params: ValueGetterParams<Product>) => {
                if (params.data) {
                    return params.data.company && params.data.company.name;
                }
                return '';
            },
            valueSetter: (params: ValueSetterParams<Product>) => {
                if (params.data.company) {
                    params.data.company.name = params.newValue;
                    return true;
                }
                return false;
            }
        },
        { headerName: "Цена покупки", field: "defaultBuyPrice" as keyof Product },
        { headerName: "Цена продажи", field: "defaultSellPrice" as keyof Product },
    ];

    const defaultColDef = {
        flex: 1,
        minWidth: 100,
        filter: true,
        sortable: true,
        resizable: true
    }

    return (
        <Box sx={{ width: '100%', height: '100%' }} className="ag-theme-quartz">
            <AgGridReact
                rowData={products}
                columnDefs={columns}
                defaultColDef={defaultColDef}
                domLayout='autoHeight'
                loading={loading}
                loadingOverlayComponent={() => <RefreshIcon className="animate-spin" />}
            />
        </Box>
    )
};


export default ProductsTable;
