import React, { useState } from "react";

const Movies = ({ movies, onSelectMovie }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (movie) => {
    onSelectMovie(movie);
    setShowDropdown(false);
  };

  return (
    <div className="movies-dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        ☰
      </button>
      {showDropdown && (
        <div className="dropdown-content">
          {movies.map((movie) => (
            <div
              key={movie.name}
              className="movie-item"
              onClick={() => handleSelect(movie)}
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
      )}
    </div>
  );
};

export default Movies;
