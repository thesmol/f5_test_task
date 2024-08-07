import { Container, Typography } from "@mui/material"
import ProductsTable from "../components/ProductsTable"
import PrintOrderPage from "./print/PrintOrderPage";
import PrintButton from "../components/PrintButton";

/**
 * Компонент страницы дашборда.
 * Отображает заголовок и таблицу продуктов,
 * а так же кнопку для печати страницы заказа
 *
 * @returns Страница дашборда
 */
const DashboardPage: React.FC = () => {
    return (
        <Container maxWidth="md" className="w-full h-fit max-h-screen" sx={{ '& button': { mt: 3 } }}>
            <Typography variant="h4" marginBottom={2} marginTop={4}>
                Продукты
            </Typography>
            <ProductsTable />
            <PrintButton name={"Печать заказа!"}>
                <PrintOrderPage />
            </PrintButton>
        </Container>
    )
}

export default DashboardPage