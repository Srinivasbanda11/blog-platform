import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Blog Platform</h1>
          <p>Welcome to the Blog Platform - A MERN Stack Application</p>
        </header>
        <Routes>
          <Route path="/" element={
            <div className="home">
              <h2>Latest Posts</h2>
              <p>Blog posts will appear here...</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
