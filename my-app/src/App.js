//U4888-2664
import React, { useState } from "react";
import "./App.css";
import RateMovieButton from "./RateMovieButton";
import Movies from "./movies";
import movieInfo from "./movieInfo";
import UploadButton from "./UploadButton";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [ratingValue, setRatingValue] = useState(0);
  const [commentValue, setCommentValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setShowDropdown(false);
    setRatingValue(ratings[movie.name] || 0);
    setCommentValue(comments[movie.name] || "");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRateMovie = () => {
    if (selectedMovie) {
      setRatings({
        ...ratings,
        [selectedMovie.name]: ratingValue,
      });
      setComments({
        ...comments,
        [selectedMovie.name]: commentValue,
      });
    }
  };

  const handleRatingChange = (value) => {
    setRatingValue(value);
  };

  const handleCommentChange = (event) => {
    setCommentValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <button className="dropdown-btn" onClick={toggleDropdown}>
            ☰
          </button>
          <h1 className="app-title">Spoiled Tomatoes</h1>
          <div className="upload-button">
            <UploadButton />
          </div>
        </div>
        {showDropdown && (
          <div className="dropdown-content">
            <Movies movies={movieInfo} onSelectMovie={handleSelectMovie} />
          </div>
        )}
      </header>
      <div className="app-content">
        {selectedMovie && (
          <div className="selected-movie">
            <img
              src={selectedMovie.picture}
              alt={selectedMovie.name}
              className="selected-movie-picture"
            />
            <h2 className="selected-movie-title">{selectedMovie.name}</h2>
            <div className="rate-movie">
              <h3>Rate the Movie</h3>
              <RateMovieButton
                value={ratingValue}
                onChange={handleRatingChange}
              />
              <textarea
                className="comment-box"
                placeholder="Add your comment..."
                value={commentValue}
                onChange={handleCommentChange}
              ></textarea>
              <br />
              <br />
              <button className="submit-btn" onClick={handleRateMovie}>
                Submit Rating
              </button>
              {ratings[selectedMovie.name] !== undefined && (
                <p className="confirmation-message">
                  Rated {ratings[selectedMovie.name]}/5 tomatoes
                  <br />
                  {comments[selectedMovie.name] && (
                    <span>Comment: {comments[selectedMovie.name]}</span>
                  )}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
