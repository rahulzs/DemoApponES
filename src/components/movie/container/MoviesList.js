/**
 * Created by gouravpal on 13/05/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesListActions from '../../../actions/moviesListActions';
import MoviesListPresentation from '../presentation/MoviesListPresentation';
import NoMovieFoundPresentation from '../presentation/NoMovieFoundPresentation';
import ProgressView from '../../common/ProgressView';
/*Its a container for movies list screen.*/
class MoviesList extends React.Component {


  render() {
    //getting list of movies to a constant movies from props
    const {movies} = this.props;
    return (
      <div>
        {
          (movies.isLoading == "true") ? <ProgressView/> :
            (movies.Search && movies.Search.length > 0) ? <MoviesListPresentation movies={movies.Search}/> :
              <NoMovieFoundPresentation/>
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired
};
//to subscribe to store updates
function mapStateToProps(state, ownProps) {
  return {
    movies: state.moviesReducer
  };
}
//to bind action creators
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesListActions, dispatch)
  };
}
//Connecting a React component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
