import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import Banner from "../images/omkaar.png";
import "./styles/Login.css";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    role: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form is valid: Submitting data");
      // Here you would typically handle the API call or state update
    } else {
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
    <div className="login-section">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <Form.Group controlId="email" className="input-group">
          <Form.Label className="form-label">Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="input-group">
          <Form.Label className="form-label">Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            required
          />
          <Form.Text className="text-muted forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="role" className="input-group">
          <Form.Label className="form-label">Role:</Form.Label>
          <Form.Control
            as="select"
            name="role"
            value={formValues.role}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Role</option>
            <option value="user">Priest</option>
            <option value="user">Devotee</option>
            <option value="admin">Admin</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" className="btn-success">
          Login
        </Button>
        <p className="login-link">
          Not a member? <a href="/signup">Sign up</a>
        </p>
      </Form>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

const LoginSection = () => (
  <div className="container text-center">
    <img
      loading="lazy"
      src={Banner}
      alt="Omkaar Temple banner"
      className="banner-image"
    />
    <Navigation />
    <LoginForm />
    <Footer />
  </div>
);

export default LoginSection;
