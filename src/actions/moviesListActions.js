/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from './actionTypes';
import moviesApi from '../api/moviesApi';

/*action is called before getAllMovies api call.
 It indicates that api call has started*/
export function loadMoviesBegin() {
  return {type: types.LOAD_MOVIES_BEGIN};
}

/*action is called when getAllMovies api is successful.*/
export function loadMoviesSuccess(movies) {
  return {type: types.LOAD_MOVIES_SUCCESS, movies};
}

/*thunk: make async call to api*/
export function loadMovies(movieName) {
  return function (dispatch) {
    dispatch(loadMoviesBegin());
    return moviesApi.getAllMovies(movieName).then(movies => {
      dispatch(loadMoviesSuccess(movies));
      }).catch(error => {
      throw (error);
    });
  };
}
