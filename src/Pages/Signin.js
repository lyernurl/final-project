import React from 'react';
import './Sign.css';

const Signin = () => {
  return (
    <div className="container signin-container">
      <h2 className="heading">Sign In</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
