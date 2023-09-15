import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    console.log('Logging in with username:', username, 'and password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className='re'><Link to="r">Register</Link></div>
        </form>
        <button type="submit">Login</button>
    </div>
  );
}

export default Login;
