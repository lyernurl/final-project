import React from 'react';
import './Sign.css';

const Signup = () => {
  return (
    <div className="container signup-container">
      <h2 className="heading">Sign Up</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
