//Add a movie selector dropdown to the toolbar that lists available movies.
//Ensure that selecting a movie dynamically updates the movie details in the toolbar and appropriately adjusts the RateMovieButton to reflect the selected movie.
import React from "react";

const Movies = ({ movies, onSelectMovie }) => {
  return (
    <div className="movies-dropdown">
      <div className="dropdown-content">
        {movies.map((movie) => (
          <div
            key={movie.name}
            className="movie-item"
            onClick={() => onSelectMovie(movie)}
          >
            <img
              src={movie.picture}
              alt={movie.name}
              className="movie-picture-small"
            />
            <span className="movie-name">{movie.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
