import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
      }
    }
  }
`;

export const QUERY_MOVIES = gql`
  query movies {
    movies{
      _id
      movieTitle
      movieUrl
      moviePicUrl
    }
  }
`;

export const QUERY_MOVIE = gql`
query movie($id: ID) {
  movie(_id: $id) {
    _id
    movieTitle
    movieUrl
    moviePicUrl   
  }
}
`