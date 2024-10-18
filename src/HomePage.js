// HomePage.js
import './HomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>College Insights and Career Pathways</h1>
      <Link to="/explore">
        <button className="explore-btn">Explore</button>
      </Link>
      <Link to="/admin" className="admin-link">
        <button className="admin-btn">Admin</button>
      </Link>
    </div>
  );
};

export default HomePage;
