import { gql } from '@apollo/client';

/**
 * Мутация для входа пользователя
 */
export const LOGIN = gql`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      accessToken
    }
  }
`;

/**
 * Мутация для выхода пользователя
 */
export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

/**
 * Мутация для регистрации нового пользователя
 */
export const REGISTER = gql`
  mutation addUser($data: UserCreateDTO!) {
    addUser(data: $data) {
      id
      email
    }
  }
`;