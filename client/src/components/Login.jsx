import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/Login.css"; // Make sure this points to your CSS file
import Footer from "./Footer";
import Navigation from "./Navigation";
import Banner from "../images/omkaar.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin@example.com" && password === "password" && role === "Admin") {
      console.log("Login successful");
    } else {
      setError("Invalid email, password, or role");
      toast.error('Invalid email, password, or role', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container">
      <img
        loading="lazy"
        src={Banner}
        alt="Omkaar Temple banner"
        className="banner-image"
      />
      <Navigation />
      <main className="main-content">
        <div className="login-section">
          <h1>Login</h1>
          <div className="login-card">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" // Placeholder added here
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" // Placeholder added here
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Priest">Priest</option>
                <option value="Devotee">Devotee</option>
              </select>
            </div>
            <button type="submit" onClick={handleLogin}>Login</button>
            {error && <p className="error">{error}</p>}
            <p className="forgot-password"><a href="#">Forgot Password?</a></p>
            <p className="not-member">Not a member! <a href="/SignUp">SignUp</a></p>
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Login;
