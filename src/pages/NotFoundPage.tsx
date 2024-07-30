import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * Компонент страницы 404 (Не найдено).
 * Отображает сообщение об ошибке и кнопку для возврата на главную страницу.
 *
 * @returns Страница 404
 */
const NotFoundPage: React.FC = () => {
    return (
        <div className='w-[100wh] h-[100vh] flex flex-col justify-center items-center gap-4'>
            <Typography variant="h2">
                Страница не найдена
            </Typography>
            <Button variant="contained">
                <Link to="/dashboard">На главную</Link>
            </Button>
        </div>
    );
};

export default NotFoundPage;