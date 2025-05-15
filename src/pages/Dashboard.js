
import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../components/UserHeader'; 



const Dashboard = () => {
  return (
    <>
    <UserHeader />
    <div style={{ padding: '1rem' }}>
      <h2>Welcome! What would you like to do?</h2>
      <Link to="/add" style={{ marginRight: '1rem' }}> Add Book</Link>
      <Link to="/list">View Book List</Link>
    </div>
    </>
  );
};

export default Dashboard;
