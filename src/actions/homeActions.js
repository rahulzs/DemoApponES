/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

/*action is called before getMovie api call.
 It indicates that api call has started*/
export function loadMovieBegin() {
  return {type: types.LOAD_MOVIE_BY_ID_BEGIN};
}

/*action is called when getMovie api is successful.*/
export function loadMovieSuccess(movie) {
  return {type: types.LOAD_MOVIE_BY_ID_SUCCESS, movie};
}

/*
 loadmovie fetch movie details based on the movieId. It uses thunk middleware.
 loadMovieBegin action is dispatched first, just to indicate that api call has started.
 thunk: make async call to api*/
export function loadMovie(movieId) {
  return function (dispatch) {
    dispatch(loadMovieBegin());
    return moviesApi.getMovie(movieId)
      .then(movie => {
        dispatch(loadMovieSuccess(movie));
      }).catch(error => {
        throw (error);
      });
  };
}
