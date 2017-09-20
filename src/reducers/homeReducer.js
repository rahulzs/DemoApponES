/**
 * Created by gouravpal on 13/05/17.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

/*
* reducer for HomePage
* */
export default function homeReducer(state = initialState.movie, action) {
  switch (action.type) {
    case types.LOAD_MOVIE_BY_ID_BEGIN:
      return {
        ...state,
        isLoading: true
      };
    case types.LOAD_MOVIE_BY_ID_SUCCESS:
     return{
       ...state,
       ...action.movie,
       isLoading:false
     };
    default:
      return state;
  }
}
