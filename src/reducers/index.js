/**
 * Created by gouravpal on 13/05/17.
 */
import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import moviesReducer from './moviesReducer';
/*
* combining multiple ruducers at one place and returning rootReducer
* */
const rootReducer = combineReducers({
  homeReducer
  , moviesReducer
});

export default rootReducer;
