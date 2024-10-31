import React from 'react';
import AdventureList from '../pages/AdventureList';
import "../styles/HomePage.css";

const HomePage = () => {
  return (
      <div className="home-page">
          {/* Hero Section */}
          <div className="hero-section">
              <div className="container">
                  <div className="hero-text">
                      <h1>Time For Your Next Adventure</h1>
                      <p>Let us plan it for you</p>
                  </div>
              </div>
          </div>

          {/* Featured Adventures */}
          <div className="featured-adventures">
              <div className="container">
                  <AdventureList/>
              </div>
          </div>
      </div>

  );
};

export default HomePage;
