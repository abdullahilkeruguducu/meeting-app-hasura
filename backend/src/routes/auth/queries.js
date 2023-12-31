export const IS_EXISTS_USER = `
  query isExistsEmail($email: String!){
    users(
      where:{
        email: {
          _eq: $email
        }
      }
    ){
      id
    }
  }
`;

export const INSERT_USER_MUTATİON = `
  mutation insertUser($input:users_insert_input!){
    insert_users_one(
      object: $input
    ){
      id
      email
    }
  }
`;
