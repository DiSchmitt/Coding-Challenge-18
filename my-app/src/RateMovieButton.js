//Create a RateMovieButton component that allows users to rate a movie from 1 to 5 stars.
//Implement functionality to display a confirmation message once a rating is submitted.
import React from "react";

const RateMovieButton = ({ value, onChange }) => {
  const handleClick = (newValue) => {
    onChange(newValue);
  };

  return (
    <div className="rating-tomatoes">
      {[1, 2, 3, 4, 5].map((val) => (
        <button
          key={val}
          className={`tomato-btn ${val <= value ? "selected" : ""}`}
          onClick={() => handleClick(val)}
        >
          {val <= value ? "🍅" : "✳️"}
        </button>
      ))}
    </div>
  );
};

export default RateMovieButton;
