import React, { useState } from 'react';

const RateMovieButton = () => {
  const [rating, setRating] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmitRating = () => {
    if (rating === 0) {
      alert('Please select a rating before submitting.');
    } else {
      setShowConfirmation(true);
    }
  };

  return (
    <div className="rate-movie">
      <h2>Rate the Movie</h2>
      <div className="rating-tomatoes">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`tomato-btn ${value <= rating ? 'selected' : ''}`}
            onClick={() => handleRatingClick(value)}
          >
            {value <= rating ? '🍅' : '✳️'}
          </button>
        ))}
      </div>
      <button className="submit-btn" onClick={handleSubmitRating}>
        Submit Rating
      </button>
      {showConfirmation && (
        <p className="confirmation-message">
          Thank you for rating {rating}/5 tomatoes!
        </p>
      )}
    </div>
  );
};

export default RateMovieButton;

