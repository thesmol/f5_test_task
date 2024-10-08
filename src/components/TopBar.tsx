import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useRecoilValue } from "recoil";
import { authState, AuthStateType } from "../state/authState";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

/**
 * Компонент верхней панели приложения.
 * Отображает название приложения и кнопку выхода для аутентифицированных пользователей.
 *
 * @returns Верхняя панель приложения
 */
const TopBar: React.FC = () => {
    const auth = useRecoilValue<AuthStateType>(authState);
    const { logout } = useAuth();
    const router = useNavigate();


    /**
    * Обработчик выхода из системы
    */
    const handleLogout = () => {
        logout();
        router("/");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Кондуктор
                    </Typography>
                    {auth.isAuthenticated ? <Button variant="contained" color="warning" onClick={() => handleLogout()}>Выйти</Button> : null}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar;