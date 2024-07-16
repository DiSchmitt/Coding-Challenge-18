import React, { useState } from 'react';
import './App.css';
import RateMovieButton from './RateMovieButton';
import Movies from './movies';
import movieInfo from './movieInfo';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [ratings, setRatings] = useState({});

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleRateMovie = (rating) => {
    if (selectedMovie) {
      setRatings({
        ...ratings,
        [selectedMovie.name]: rating,
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rating App</h1>
        <div className="app-content">
          <Movies movies={movieInfo} onSelectMovie={handleSelectMovie} />
          {selectedMovie && (
            <div className="selected-movie">
              <img src={selectedMovie.picture} alt={selectedMovie.name} className="selected-movie-picture" />
              <h2 className="selected-movie-title">{selectedMovie.name}</h2>
              <RateMovieButton
                initialRating={ratings[selectedMovie.name] || 0}
                onRate={handleRateMovie}
              />
              {ratings[selectedMovie.name] && (
                <p className="confirmation-message">
                  Rated {ratings[selectedMovie.name]}/5 tomatoes
                </p>
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;