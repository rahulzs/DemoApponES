/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';
/*
 * reducer for MovieListPage
 * */
export default function moviesReducer(state = initialState.movies, action) {

  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return {
        ...state,
        ...action.movies,
        isLoading: false
      };
    case types.LOAD_MOVIES_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
