import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';

/**
 * Интерфейс для формы входа в систему
 */
interface LoginForm {
    userLogin: string;
    userPassword: string;
}

/**
 * Компонент страницы входа.
 * Отображает форму для ввода логина и пароля.
 *
 * @returns Страница входа
 */
const LoginPage: React.FC = () => {
    const { login, isAuthLoading, error, setError } = useAuth();
    const [formData, setFormData] = useState<LoginForm>({
        userLogin: "",
        userPassword: ""
    });

    const router = useNavigate();

    /**
     * Обработчик изменения полей формы
     * 
     * @param e - Событие изменения формы
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    /**
     * Обработчик отправки формы
     * 
     * @param e - Событие отправки формы
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const success = await login(formData.userLogin, formData.userPassword);
        if (success) {
            toast.success('Вход выполнен успешно!');
            router('/dashboard');
        } else {
            toast.error(error || 'Произошла ошибка при входе');
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                maxWidth: 400,
                margin: 'auto',
                marginTop: 10,
                padding: 3,
                borderRadius: 5,
                boxShadow: '0 0 30px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Вход в систему
            </Typography>

            <TextField
                required
                id="userLogin"
                name="userLogin"
                disabled={isAuthLoading}
                label="Логин"
                variant="outlined"
                value={formData.userLogin}
                onChange={handleChange}
                fullWidth
                error={!!error}
                onFocus={() => setError(null)}
            />
            <TextField
                required
                id="userPassword"
                name="userPassword"
                disabled={isAuthLoading}
                label="Пароль"
                variant="outlined"
                type="password"
                value={formData.userPassword}
                onChange={handleChange}
                fullWidth
                error={!!error}
                onFocus={() => setError(null)}
            />
            <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={isAuthLoading}
            >
                {isAuthLoading ?
                    <RefreshIcon className='animate-spin' />
                    :
                    'Войти'
                }
            </Button>
            <Typography variant="caption" display="block" gutterBottom>
                Нет аккаунта? <Link className="text-blue-500" to="/register">Зарегистрироваться</Link>
            </Typography>
        </Box>
    );
};

export default LoginPage;