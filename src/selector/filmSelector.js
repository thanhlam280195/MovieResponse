import { createSelector } from 'reselect';
import { initialState } from '../reducer/films';


const getFilmState = state => state.films ||  initialState;

export const getListMovies = createSelector(
  getFilmState,
  filmState => filmState.listMovie || [],
);