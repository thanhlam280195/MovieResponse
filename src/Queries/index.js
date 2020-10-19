import { gql } from "apollo-boost";

export const GET_MOVIE = gql`
  query($page: Int) {
    nowPlaying(page: $page) {
      movies {
        id
        title
        original_title
        original_language
        overview
        video
        poster_path
        backdrop_path
        popularity
        adult
        vote_count
        vote_average
        release_date
      }
      count
      total
      page
      totalPage
    }
  }
`;
