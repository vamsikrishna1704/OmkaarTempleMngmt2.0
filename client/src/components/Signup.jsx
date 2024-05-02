import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles/Signup.css"; // Assuming you'll have separate CSS for signup
import Footer from "./Footer";
import Navigation from "./Navigation";
import Banner from "../images/omkaar.png";
const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Submit form logic here
      console.log("Form submitted successfully");
      // Clear form fields after successful submission
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        address: ""
      });
    } else {
      // Display errors using toast
      Object.values(errors).forEach(error => {
        toast.error(error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formValues.firstName.match(/^[a-zA-Z]+$/)) {
      errors.firstName = "First name must not include numbers";
    }
    if (!formValues.lastName.match(/^[a-zA-Z]+$/)) {
      errors.lastName = "Last name must not include numbers";
    }
    if (!formValues.email.includes('@')) {
      errors.email = "Email must include '@' character";
    }
    if (!formValues.phone.match(/^\+\d{1,2}-?\d{10}$/)) {
      errors.phone = "Phone number must include country code and be 10 digits";
    }
    if (!formValues.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)) {
      errors.password = "Password must be at least 8 characters, include a number, uppercase, lowercase, and special character";
    }
    return errors;
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
        <div className="signup-section">
          <h1>Sign Up</h1>
          <div className="signup-card">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formValues.address}
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default SignUp;