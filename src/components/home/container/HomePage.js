/**
 * Created by gouravpal on 10/05/17.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import HomePagePresentation from '../presentation/HomePagePresentation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../../actions/homeActions';
/*Its a container for landing screen.*/
class HomePage extends React.Component {

  componentDidMount() {
    //default movie call
    this.props.actions.loadMovie("tt1440161");
  }

  render() {
    const {movie} = this.props;

    return (
       <HomePagePresentation movie={movie}/>
    );
  }
}

HomePage.propTypes = {
  movie: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//to subscribe to store updates
function mapStateToProps(state, ownProps) {
  return {
    movie: state.homeReducer
  };
}

//to bind action creators
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}

//Connecting a React component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
