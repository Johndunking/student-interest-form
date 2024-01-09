import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Survey App</h1>
      <Link to="/survey">Take Survey</Link>
      <Link to="/search">Search Results</Link>
    </div>
  );
};

export default Home;
