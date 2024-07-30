import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

/**
 * Создание HTTP-линка для GraphQL-запросов
 */
const httpLink = createHttpLink({
    uri: 'https://proplan.work/graphql',
});

/**
 * Настройка контекста для добавления токена аутентификации в заголовки запросов
 */
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
});

/**
 * Создание и настройка клиента Apollo
 */
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;