import React, { useState, useEffect } from 'react';

const RateMovieButton = ({ initialRating, onRate }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmitRating = () => {
    if (rating === 0) {
      alert('Please select a rating before submitting.');
    } else {
      onRate(rating); 
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
    </div>
  );
};

export default RateMovieButton;