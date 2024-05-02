import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Banner from "../images/omkaar.png"; // Import for the banner image
import pic1 from "../images/pic1.jpeg"
import pic2 from "../images/pic2.jpeg"
import pic3 from "../images/pic3.jpeg"
import pic4 from "../images/pic4.jpeg"
import pic5 from "../images/pic5.jpeg"
import pic6 from "../images/pic6.jpeg"

import Footer from "./Footer"; // Import for the Footer component
import Navigation from "./Navigation"; // Import for the Navigation component
import "./styles/Gallery.css"; // Import CSS for gallery styles

const Gallery = () => {
  // Dummy data for gallery items
  const galleryItems = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6
    // Add more image paths as needed
  ];

  // State to track current index of displayed item
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle clicking on previous button
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1));
  };

  // Function to handle clicking on next button
  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1));
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
        
        <div className="gallery-section">
          
          <h1>Gallery</h1>
          <div className="gallery">
            
            <button className="nav-btn prev" onClick={handlePrev}><FaChevronLeft /></button>
            <div className="gallery-item">
            <img loading="lazy"  src={galleryItems[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="gallery-item" />
            </div>
            <button className="nav-btn next" onClick={handleNext}><FaChevronRight /></button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Gallery;
