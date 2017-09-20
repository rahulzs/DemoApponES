/**
 * Created by Gourav.Pal on 10-05-2017.
 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//creating object of store
const store = configureStore();

render(
  //Making the Redux store available to the connect() calls in the component hierarchy below
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/></Provider>,
  document.getElementById("app")
);
