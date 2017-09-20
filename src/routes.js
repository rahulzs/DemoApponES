/**
 * Created by gouravpal on 10/05/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/container/HomePage';
import MoviesPage from './components/movie/container/MoviesList';

/**
 *Configuring the routing of the apps.
 */
 export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="movies" component={MoviesPage}/>
  </Route>
);
