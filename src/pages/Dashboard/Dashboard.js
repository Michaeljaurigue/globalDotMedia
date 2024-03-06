import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ username }) => {

  function logout() {
    try {
      localStorage.removeItem('token');
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error occurred during logout:', error);

      // Optionally, notify the user about the error
      alert('An error occurred during logout. Please try again later.');
    }
  }


  return (
    <div>
      <h1 className='dashboard_welcome'>Welcome {username}!</h1>
      <img src="/images/abook1.jpg" alt="Profile Picture" className='dashboard_image' />
      <div className='dashboard_buttons'>

        <Link to="/create-blog">
          <button className='dashboard_button' >Create Blog</button>
        </Link>
        <Link to="/maad-blog/">
          <button className='dashboard_button'>View Blogs</button>
        </Link>
        <button className="dashboard__button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
