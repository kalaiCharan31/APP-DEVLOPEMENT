import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../app/actions";
import Birthday from "../assets/images/img1.jpg"
import marriage from"../assets/images/img3.jpg"
import '../assets/css/dashboard.css';

const Dashboard = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => navigate('/profile')}>Profile</button>
          </li>
          <li>
            <button onClick={() => navigate('/aboutus')}>About Us</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className='hi'><i>Hellow ! </i><span className="user_name">{username}</span></h1>
        <br/>
        <p className="welcome-text">~ Let's begin your journey with us!</p>
        <br />
        <br/>
        <br/>
        <p className="sub-text">>> Are you searching for your lost device? We can find it...</p>

        {/* Image Rows */}
        <div className="image-row">
          <img src={Birthday}alt="Image 1" className="dashboard-image" />
          <img src={marriage} alt="Image 2" className="dashboard-image" />
        </div>

        {/* You can display other user-related information here */}
      </main>
    </div>
  );
}

export default Dashboard;
