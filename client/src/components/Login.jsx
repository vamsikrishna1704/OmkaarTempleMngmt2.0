import React, { useState } from "react";
import "./styles/Home.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./Navigation";
import "./styles/Login.css";
import OmkaarImage from '../images/Omkaar.png';
const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    role: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid: Submitting data");
      // Here you would typically handle the API call or state update
    } else {
      setFormErrors(errors);
      Object.values(errors).forEach(error => {
        toast.error(error);
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.email.includes('@')) {
      errors.email = "Email must include '@' character";
    }
    if (formValues.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    return errors;
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <div className="input-group">
          <label htmlFor="email" className="input-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            required
            onChange={handleInputChange}
            value={formValues.email}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            required
            onChange={handleInputChange}
            value={formValues.password}
          />
          <p className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
        <div className="input-group">
          <label htmlFor="role" className="input-label">Role:</label>
          <select id="role" name="role" className="input-field" required onChange={handleInputChange} value={formValues.role}>
            <option value="">Select Role</option>
            <option value="user">Priest</option>
            <option value="user">Devotee</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="login-actions">
          <button type="submit" className="submit-btn">Login</button>
          <p className="login-link">
            Not a member? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

const LoginSection = () => (
  <section className="login-section" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/af06a7fc78f3b6da1c8d399d64b3a374f108ab0eb2d9908c06137c90a6c09638?apiKey=0a7c2887b1ad4700964c6779ce9bea19&')" }}>
    <LoginForm />
  </section>
);



function MyComponent() {
  return (
    <>
      <div className="container">
        <img
          loading="lazy"
          src={OmkaarImage}
          alt="Omkaar Temple banner"
          className="banner-image"
        />
        <Navigation />
        <LoginSection />
      </div>
    </>
  );
}

export default MyComponent;
