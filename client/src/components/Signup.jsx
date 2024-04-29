import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./Navigation";
import "./styles/Home.css";
import "./styles/Signup.css";

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    address: ""
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
    <>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2>
        <div className="input-group">
          <label htmlFor="firstName" className="input-label">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="input-field"
            required
            onChange={handleInputChange}
            value={formValues.firstName}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName" className="input-label">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="input-field"
            required
            onChange={handleInputChange}
            value={formValues.lastName}
          />
        </div>
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
          <label htmlFor="phone" className="input-label">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="input-field"
            required
            onChange={handleInputChange}
            value={formValues.phone}
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
        </div>
        <div className="input-group">
          <label htmlFor="address" className="input-label">Address:</label>
          <textarea
            id="address"
            name="address"
            className="input-field address-field"
            onChange={handleInputChange}
            value={formValues.address}
          />
        </div>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
};

const SignUpSection = () => (
  <section className="signup-section" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/af06a7fc78f3b6da1c8d399d64b3a374f108ab0eb2d9908c06137c90a6c09638?apiKey=0a7c2887b1ad4700964c6779ce9bea19&')" }}>
    <SignUpForm />
  </section>
)

export default SignUpSection;
