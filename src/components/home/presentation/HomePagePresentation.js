/**
 * Created by gouravpal on 11/05/17.
 */
import React, {PropTypes} from 'react';
import defaultImage from '!!file!../../../images/showtime.jpg';
import ProgressView from '../../common/ProgressView';

/*Presentational component, accepts 1 prop as movie to display default movie*/
const HomePagePresentation = (movie) => {

  return (
    <div id="homepagecontainer" className="jumbotron">
      {(movie.movie.isLoading == "true") ? <ProgressView/> :
        <div >
          <div className="row">
            <div className="col-xs-6">
              <img src={movie.movie.Poster === 'N/A' ? defaultImage : movie.movie.Poster} alt={movie.movie.Title}
                   title={movie.movie.Title}/>
            </div>
            <div className="col-xs-6">
              <h3>{movie.movie.Title}:{movie.movie.Year}</h3>
              <h4>{movie.movie.Actors}</h4>
              <p>{movie.movie.Plot}</p>
            </div>
          </div>
        </div>
      }
    </div>

  );
};

HomePagePresentation.propTypes = {
  movie: PropTypes.object.isRequired
};

export default HomePagePresentation;
