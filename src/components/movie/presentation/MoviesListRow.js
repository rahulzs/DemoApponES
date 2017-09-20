/**
 * Created by gouravpal on 13/05/17.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import defaultImage from '!!file!../../../images/showtime.jpg';

/*
 * This presentational component creates a row for the movie send as prop
 * */
const MovieListRow = ({movie}) => {
  return (
    <tr>
      <td><img src={movie.Poster === 'N/A' ? defaultImage : movie.Poster} alt={movie.Title} title={movie.Title}/></td>
      <td>{movie.Title}</td>
      <td>{movie.Year}</td>
    </tr>
  );
};

MovieListRow.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieListRow;

