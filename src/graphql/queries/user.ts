import { gql } from '@apollo/client';

export const GET_USER_ROLES = gql`
  query{
    userRoles{
        id, 
        name
    }
}
`;

export const GET_USERS_AND_ROLES = gql`
  query{
    users{
        name,
        userRole{
            name
        }
    }
}
`