import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { Role, User } from '../types';
import { useQuery } from '@apollo/client';
import { GET_USER_ROLES } from '../graphql/queries/user';

const RegisterUserForm: React.FC = () => {
    const { register, isAuthLoading, error, setError } = useAuth();
    const [formData, setFormData] = useState<User>({
        email: "",
        phone: "",
        name: "",
        password: "",
        userRoleId: null,
        leaders: [],
    });
    
    const { data, loading } = useQuery(GET_USER_ROLES);

    const [userRoles, setUserRoles] = useState<Role[] | []>([{
        id: 0,
        name: "Роли не подгрузились",
    }]);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);


    console.log(data);
    useEffect(() => {

    }, [data]);

    const router = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const success = await register(formData);
        if (success) {
            toast.success('Регистрация выполнена успешно!');
            router('/dashboard');
        } else {
            toast.error(error || 'Произошла ошибка при регистрации');
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
                Регистрация в системе
            </Typography>

            <TextField
                required
                id="email"
                name="email"
                disabled={isAuthLoading}
                label="Почта"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                error={!!error}
                onFocus={() => setError(null)}
            />
            <TextField
                id="phone"
                name="phone"
                disabled={isAuthLoading}
                label="Телефон"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                error={!!error}
                onFocus={() => setError(null)}
            />

            <TextField
                required
                id="name"
                name="name"
                disabled={isAuthLoading}
                label="Имя"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                error={!!error}
                onFocus={() => setError(null)}
            />

            <TextField
                required
                id="password"
                name="password"
                disabled={isAuthLoading}
                label="Пароль"
                variant="outlined"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                error={!!error}
                onFocus={() => setError(null)}
            />

            <TextField
                required
                id="userRoleId"
                name="userRoleId"
                disabled={isAuthLoading}
                label="Роль"
                variant="outlined"
                select
                defaultValue={selectedRole?.name}
                onChange={handleChange}
                fullWidth
                error={!!error}
                onFocus={() => setError(null)}
            >
                {userRoles.map((role) => (
                    <MenuItem
                        key={role.id}
                        value={role.id}
                    >
                        {role.name}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                required
                id="leaders"
                name="leaders"
                disabled={isAuthLoading}
                label="Руководители"
                variant="outlined"
                type="password"
                value={formData.leaders}
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
                    'Зарегистрировать'
                }
            </Button>
        </Box>
    );
};

export default RegisterUserForm;
