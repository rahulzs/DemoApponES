/**
 * Created by gouravpal on 10/05/17.
 */
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as moviesListActions from '../actions/moviesListActions';

/*Base container component for all the views/pages*/
class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      searchWord: ''
    };

    this.onSearch = this.onSearch.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  /*
   *onSearch function is triggered on click of the search button.
   * It fetch new movies list based on the searchWord.
   * */
  onSearch() {
    this.props.actions.loadMovies(this.state.searchWord);
    browserHistory.push('/movies');
  }

  /**
   *updateInputValue function is triggered onChange of the search input field and
   * update the searchWord in the state.
   */
  updateInputValue(event) {
    this.setState({
      searchWord: event.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header value={this.state.searchWord} onChange={this.updateInputValue} onSearch={this.onSearch}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  searchWord: PropTypes.string
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
