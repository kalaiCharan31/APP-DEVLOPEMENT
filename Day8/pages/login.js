import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/login.css';

// Import the setUserName action
import { setUserName } from '../app/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error('Password should be at least 8 characters long.', {
        autoClose: 2000, // Set the duration in milliseconds (2 seconds in this case)
      });
      return;
    }

    // Dispatch the setUserName action with the entered username
    dispatch(setUserName(username)); // This line dispatches the username to the Redux store

    try {
      // Show a success toast and wait for it to close before navigating
      await new Promise((resolve) => {
        toast.success('Login successful!', {
          autoClose: 1000, // Set the duration in milliseconds (2 seconds in this case)
          onClose: resolve,
        });
      });

      // Once the toast is closed, navigate to the dashboard page
      navigate('/homepage'); // Redirect to the dashboard page
    } catch (error) {
      console.error('Toast error:', error);
    }
  };

  const goToRegister = () => {
    navigate('/register'); // Redirect to the register page
  };

  return (
    <div className="login-container">
      <h2 className='kalai'>Login!</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username"><b className='jj'>Username:</b></label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><b className='jj'>Password:</b></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account?{' '}
        <span className="register-here" onClick={goToRegister}>
          <u>Register here</u>
        </span>
      </p>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
