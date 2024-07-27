import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useRecoilValue } from "recoil";
import { authState, AuthStateType } from "../state/authState";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const TopBar: React.FC = () => {
    const auth = useRecoilValue<AuthStateType>(authState);
    const { logout } = useAuth();
    const router = useNavigate();


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
                    {auth.isAuthenticated ? <Button color="inherit" onClick={() => handleLogout()}>Выйти</Button> : null}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar;