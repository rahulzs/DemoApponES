/**
 * Created by gouravpal on 13/05/17.
 */
import React, {PropTypes} from 'react';
import MoviesListRow from './MoviesListRow';

/*
 * Presentational components takes list of movies as prop and display the list.
 * iterating through list of movies and creating a row for each movie.
 * */
const MoviesListPresentation = ({movies}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Thumbnail</th>
                <th>Movie Name</th>
                <th>ReleaseYear</th>
            </tr>
            </thead>
            <tbody>


            {movies.map(movie =>
                <MoviesListRow key={movie.imdbID} movie={movie}/>)}
            </tbody>
        </table>

    );
};

MoviesListPresentation.propTypes = {
    movies: PropTypes.array.isRequired
};


export default MoviesListPresentation;
