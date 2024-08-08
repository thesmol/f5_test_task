import { Button, Container, Typography } from "@mui/material"
import ProductsTable from "../components/ProductsTable"
import PrintOrderPage from "./print/PrintOrderPage";
import PrintStarter from "../components/PrintStarter";

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
            {/**
             * Стартер печати, принимающий в качестве тригерра печати - кнопку
             */}
            <PrintStarter
                trigger={
                    <Button variant="contained" color="primary">Печать документа</Button>
                }
            >
                <PrintOrderPage orderId={29085} />
            </PrintStarter>
        </Container >
    )
}

export default DashboardPage