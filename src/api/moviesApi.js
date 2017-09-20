/**
 * Created by gouravpal on 13/05/17.
 */
//Base url of api.
const BASE_URL = 'http://www.omdbapi.com';

class MoviesApi {
  /*to get list of movies based on movieName*/
  static getAllMovies(movieName) {
    return fetch(`${BASE_URL}/?s=` + movieName).then((response) => {
      return response.json();
    }).then(response => {
      return response;
    });
  }

  /* to get a movie details based on movieId*/
  static getMovie(movieId) {

    return fetch(`${BASE_URL}?i=` + movieId).then((response) => {
      return response.json();
    }).then(json => {
      return json;
    });
  }
}

export default MoviesApi;
