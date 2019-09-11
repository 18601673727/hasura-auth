import gql from 'graphql-tag';

export const USER_FRAGMENT = gql`
  fragment UserParts on users {
    id
    email
    password
    is_active
    secret_token
    role
    created_at
    updated_at
  }
`;
