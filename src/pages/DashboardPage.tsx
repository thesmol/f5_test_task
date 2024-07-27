import { Container, Typography } from "@mui/material"
import ProductsTable from "../components/ProductsTable"

const DashboardPage: React.FC = () => {
    return (
        <Container maxWidth="md" className="w-full h-fit max-h-screen">
            <Typography variant="h4" marginBottom={2} marginTop={4}>
                Продукты
            </Typography>
            <ProductsTable />
        </Container>
    )
}

export default DashboardPage