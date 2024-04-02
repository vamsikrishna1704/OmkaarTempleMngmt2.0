import React from 'react';
import './Login.css'; // Assume your CSS file is named Login.css

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="header">
        <img src="logo.png" alt="Temple logo" className="logo" />
        <h1>OMKAAR TEMPLE</h1>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/activities">Activities</a>
          <a href="/resources">Resources</a>
          <a href="/about">About Us</a>
          <a href="/donations">Donations</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <main className="login-container">
        <form className="login-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" />
          
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          <button type="submit">Login</button>
          <a href="/signup" className="sign-up">Not a member? Sign Up</a>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
