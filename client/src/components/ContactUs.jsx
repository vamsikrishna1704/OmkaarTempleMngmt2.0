import React from "react";
import "./styles/Home.css";
import "./styles/ContactUs.css"; // Ensure this CSS file is similar to LiveStreamCard.css and EducationCard.css
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./Navigation";

const ContactUsCard = () => {
  return (
    <section className="contact-us-section" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/af06a7fc78f3b6da1c8d399d64b3a374f108ab0eb2d9908c06137c90a6c09638?apiKey=0a7c2887b1ad4700964c6779ce9bea19&')" }}>
      <h1>Contact Us</h1>
      <div className="contact-us-card">
        <div className="contact-item">
          <h2>Facebook:</h2>
          <p>*Facebook Messenger is currently the most reliable way of contacting us.*</p>
          <a href="https://www.facebook.com/OmkaarTemple" className="contact-link">Omkaar Temple Facebook Page</a>
        </div>
        
        <div className="contact-item">
          <h2>Email:</h2>
          <p>*Please be advised that Facebook Messenger is currently the best method of contact.*</p>
          <a href="mailto:contact@omkaartemple.org" className="contact-link">contact@omkaartemple.org</a> (Limited Availability)
        </div>
        
        <div className="contact-item">
          <h2>Phone:</h2>
          <p>*Please be advised that Facebook Messenger is currently the best method of contact.*</p>
          <a href="tel:+12603021008" className="contact-link">260-302-1008</a> (Limited Availability)
        </div>
        
        <div className="contact-item">
          <h2>US Postal Address:</h2>
          <p>Omkaar Temple<br/>14745 Yellow River Road<br/>Fort Wayne, IN 46818</p>
          <a href="https://www.google.com/maps/search/?api=1&query=14745+Yellow+River+Road+Fort+Wayne+IN+46818" className="contact-link">Open in Google Maps</a>
        </div>
        
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </section>
  );
};

const MyComponent = () => {
  return (
    <>
      <div className="container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c63b1a57a6c57ce229ab524269293fb89caa064fce14a463cdee9f7b1a65e6a?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
          alt="Omkaar Temple banner"
          className="banner-image"
        />
        <Navigation />
        <ContactUsCard />
      </div>
    </>
  );
};

export default MyComponent;
