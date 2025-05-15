import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome</h1>
      <Link to="/sign-in" style={{ marginRight: '1rem' }}>Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
};

export default Home;
