import gql from 'graphql-tag';


// login user mutation
export const LOGIN_USER = gql `
    mutation loginUser($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
    `;

    // add user mutation
export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user {
                _id
                username
                }
            }
        }
    }`;

    // save book mutation
    export const SAVE_BOOK = gql`
        mutation saveBook($input: bookInput!){
            saveBook(input: $input){
                _id
                username
                email
                savedBooks {
                    bookId
                    authors
                    image
                    description
                    title
                    link
                }
            }
        }
    `;

    // remove book mutation
    export const REMOVE_BOOK = gql `
        mutation removeBook($bookId: ID!){
            removeBook(bookId: $bookId){
                _id
                username
                email
                bookCount
                savedBooks{
                    bookId
                    authors
                    image
                    description
                    title
                    link
                }
            }
        }
    `;