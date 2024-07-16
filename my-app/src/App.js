import React from 'react';
import './App.css'; // Assuming you have a CSS file for global styles
import RateMovieButton from './RateMovieButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rating App</h1>
      </header>
      <main className="App-main">
        <RateMovieButton />
      </main>
    </div>
  );
}

export default App;