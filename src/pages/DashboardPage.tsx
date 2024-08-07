import { Container, Typography } from "@mui/material"
import ProductsTable from "../components/ProductsTable"

/**
 * Компонент страницы дашборда.
 * Отображает заголовок и таблицу продуктов.
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
        </Container>
    )
}

export default DashboardPage