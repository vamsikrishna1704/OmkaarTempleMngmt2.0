import React from "react";
import "./styles/Home.css";
import "./styles/Education.css"; // Ensure this CSS file is similar to LiveStreamCard.css
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EducationCard = () => {
  return (
    <section className="education-section" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/af06a7fc78f3b6da1c8d399d64b3a374f108ab0eb2d9908c06137c90a6c09638?apiKey=0a7c2887b1ad4700964c6779ce9bea19&')" }}>
      <h1>Education</h1>
      <div className="education-card">
        <h2>Journalists, Educators, and Curious Minds</h2>
        <p>Our doors are always open to journalists, educators, and curious minds who would like to learn more about Hinduism, our culture, and our sacred ceremonies. We also welcome field trips of all ages for teachers and their students. Please come visit the Temple to watch Hindu Poojas (ceremonial prayers) and learn about our religion. Dress code is casual, however we ask that visitors dress appropriately by not wearing clothes that are overtly revealing. Specifically, knee level or below and covering of the shoulders and chest.</p>
        <p>Our timings and ceremonies are constantly changing so we ask that larger groups and those traveling greater distances contact us ahead of time to confirm we will be open upon arrival.</p>
        <h2>Lessons About Hinduism</h2>
        <p>Educational content to come soon to this page. Check back often!</p>
        <p>As you explore our website you might see links on certain Hindu words. Click on them to learn more about Hinduism. These links take you off our site however, so please be careful. External links are marked with their destinations in parenthesis ().</p>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </section>
  );
}

export default EducationCard;
