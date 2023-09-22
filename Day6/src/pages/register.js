import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error('Password should be at least 8 characters long.');
      return;
    }

    if (username.length < 6) {
      toast.error('Username should be at least 6 characters long.');
      return;
    }

    if (!email.includes('@')) {
      toast.error('Email should contain "@" symbol.');
      return;
    }

    try {
      // Show a success toast with a custom autoClose duration
      toast.success('Registration successful!', {
        autoClose: 1000, // Set the duration in milliseconds (2 seconds in this case)
        onClose: () => {
          // After the toast is closed, navigate to the dashboard page
          navigate('/dashboard');
        },
      });
    } catch (error) {
      console.error('Toast error:', error);
    }
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <span className="login-link" onClick={goToLogin}>
          <u className='kit'>Login</u> 
        </span>
      </p>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Register;
