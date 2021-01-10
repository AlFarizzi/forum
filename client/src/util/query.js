import gql from 'graphql-tag';
export const GET_ARTICLES = gql `
    {
        articles {
            id
            article
            author {
                name
                username
            }
        }
    }
    `