import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      accessToken
    }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

export const REGISTER = gql`
  mutation addUser($data: UserCreateDTO!) {
    addUser(data: $data) {
      id
      email
    }
  }
`;