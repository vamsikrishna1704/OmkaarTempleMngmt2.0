import React from "react";
import "./styles/Home.css";
import "./styles/LiveStreamCard.css";  // Ensure proper styles are defined in this CSS file
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./Navigation";

const LiveStreamCard = () => {
  return (
    <section className="live-stream-section" style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets/TEMP/af06a7fc78f3b6da1c8d399d64b3a374f108ab0eb2d9908c06137c90a6c09638?apiKey=0a7c2887b1ad4700964c6779ce9bea19&')" }}>
      <h1>Join Our Next Live Stream!</h1>
      <div className="live-stream-card">
        <p>Our next livestream is scheduled for 6pm on March 8th, 2024 (Maha Shiva Rathri).</p>
        <div>
          <p>The channels listed below will be streaming live during the scheduled event:</p>
          <ul>
            <li>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="stream-link">
                YouTube channel
              </a>
            </li>
            <li>
              <a href="https://facebook.com/yourliveevent" target="_blank" rel="noopener noreferrer" className="stream-link">
                Facebook live
              </a>
            </li>
          </ul>
        </div>
        <p>
          Celebrate, honor, and learn about Hinduism as we open our doors and invite the world to join us for prayers, ceremonies, and events from wherever one may be.
          Live streaming important religious and cultural events will allow devotees, students, and other interested persons from all over the world to watch, learn, and even participate from anywhere with an internet connection. It allows those who are unable to travel to the Temple a way to still take part in these important and sacred events.
        </p>
        <p>LiveStreamed events are for all to enjoy, free of any charge, so please come and sit in with us at Omkaar Temple.</p>
        <p>Aum Shanthi, Shanthi, Shanthi.</p>
        <p>- The Omkaar Tech Team</p>
        <p>
          <em>P.S. "Like", Share and Subscribe to our  
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="channel-link">channel</a> 
            if you like the work we're doing - it helps tremendously! If you are absolutely ecstatic about our endeavors please consider donating to the Temple  
            <a href="https://yourdonationlink.com" target="_blank" rel="noopener noreferrer" className="donation-link">here</a>.
          </em>
        </p>
        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div>
    </section>
  );
}

export default LiveStreamCard;