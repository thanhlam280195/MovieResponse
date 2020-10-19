import {FETCH_LIST_MOVIE} from '../constants/filmConstant';

export const fetch_list_movie = listMovie => {
  return {
    type: FETCH_LIST_MOVIE,
    listMovie
  }  
}