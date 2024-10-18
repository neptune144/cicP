// ExplorePage.js
import './ExplorePage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const ExplorePage = () => {
  return (
    <div className="explore-page">
      <h1>Select Your Stream</h1>
      <p>Select the department to explore suitable colleges for your career path.</p>
      <select className="department-select">
        <option>M.Tech</option>
        <option>B.Tech</option>
        <option>MCA</option>
        <option>Degree</option>
      </select>
      <br />
      <Link to="/colleges">
        <button className="show-colleges-btn">Show Colleges</button>
      </Link>
      <br />
      <Link to="/pathways">
        <button className="find-pathways-btn">Find Your Pathways</button>
      </Link>
    </div>
  );
};

export default ExplorePage;
