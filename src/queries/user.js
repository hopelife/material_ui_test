import gql from "graphql-tag";

export const USERS = gql`
  {
    users {
      id
      name
      nick
      email
      address
    }
  }
`;

export const USER_DETAILS = gql`
  query GetUserDetails($uid: String!) {
    user(id: $uid) {
      id
      name
      nick
      email
      address
    }
  }
`;


// export const MOVIE_DETAILS = gql`
//   query getMovieDetails($movieId: Int!) {
//     movie(id: $movieId) {
//       medium_cover_image
//       title
//       rating
//       description_intro
//       language
//       genres
//     }
//     suggestions(id: $movieId) {
//       id
//       title
//       rating
//       medium_cover_image
//     }
//   }
// `;