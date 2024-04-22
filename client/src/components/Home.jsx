import React from "react";
import "./styles/Home.css";
import Navigation from "./Navigation";

const AnnouncementItem = ({ title, description }) => (
  <div className="announcement-item">
    <div className="announcement-title">{title}</div>
    <div className="announcement-description">{description}</div>
    <div className="announcement-expand">
      <div className="announcement-expand-text">+</div>
    </div>
  </div>
);

const announcements = [
  {
    title: "Jan 21, 2024: Ayodhya ramamandir prana prathistapana mahothsavam",
    description:
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
  },
  {
    title: "🌟 **Navarathri Celebration at Omkaar Temple** 🌟",
    description: "",
  },
  {
    title: "Hanuman Jayanthi on Sunday May 21st, 2017 @ 5pm",
    description: "",
  },
  {
    title: "Cultural Music Event at Omkaar Temple on 4/28/2017",
    description: "",
  },
];

const TempleHours = () => (
  <div className="temple-hours">
    <div className="temple-hours-content">
      Mon, Tues, Thurs, Fri : 9:30 - 11:00am & 5:30 - 8:00pm
      <br />
      <br />
      Sat & Sun : 9:30 - 12:00pm & 5:30 - 8:00pm
      <br />
      <br />
      Abhishekam @6pm
      <br />
      <br />
      Aarthi @6:30pm
    </div>
    <div className="temple-address">
      <span className="temple-address-label">Address</span> :
    </div>
    <div className="temple-address-details">
      <div className="temple-address-text">
        Omkaar Temple 14745 Yellow River Road Fort Wayne, IN 46818
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a6ac57d3f0c241adf241dcf9a21e6927aac676ab0f2e3e796591213b0edc307?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
        alt="Temple location map"
        className="temple-map"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7928995020c9784452fdade412b0d652054e02a06a738b0c8a01d281668713c?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
        alt="Temple location map"
        className="temple-map"
      />
    </div>
  </div>
);

const NewsletterSignup = () => (
  <div className="newsletter-signup">
    <div className="newsletter-signup-header">
      <div className="newsletter-signup-title">
        Sign up for Omkaar Temple's Newsletter :
      </div>
      <div className="newsletter-signup-required">
        *{" "}
        <span className="newsletter-signup-required-text">
          indicates Required
        </span>
      </div>
    </div>
    <form className="newsletter-signup-form">
      <label htmlFor="email" className="newsletter-signup-label">
        Email <span className="required">*</span>
      </label>
      <input
        type="email"
        id="email"
        className="newsletter-signup-input"
        required
        aria-required="true"
      />
      <label htmlFor="firstName" className="newsletter-signup-label">
        First Name <span className="required">*</span>
      </label>
      <input
        type="text"
        id="firstName"
        className="newsletter-signup-input"
        required
        aria-required="true"
      />
      <label htmlFor="lastName" className="newsletter-signup-label">
        Last Name <span className="required">*</span>
      </label>
      <input
        type="text"
        id="lastName"
        className="newsletter-signup-input"
        required
        aria-required="true"
      />
      <button type="submit" className="newsletter-signup-button">
        Subscribe
      </button>
    </form>
  </div>
);

function HomePage() {
  return (
      <div className="container">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c63b1a57a6c57ce229ab524269293fb89caa064fce14a463cdee9f7b1a65e6a?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
          alt="Omkaar Temple banner"
          className="banner-image"
        />
        <Navigation />
        <main className="main-content">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af06a7fc78f3b6da1c8d399d64b3a374f108ab0eb2d9908c06137c90a6c09638?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
            alt="Temple background"
            className="background-image"
          />
          <section className="announcements-section">
            <h2 className="section-title">Announcements</h2>
            <div className="announcements-filters">
              <div className="filter-container">
                <div className="filter-label">Select</div>
                <div className="filter-button">Sort By</div>
              </div>
              <div className="filter-icon">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00937e5f857f444af322c90d58d18fa9303ac57d01bc04a50fdf795bccf30791?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
                  alt="Filter icon"
                  className="filter-icon-image"
                />
              </div>
            </div>
            <h2 className="section-title">Temple Hours</h2>
          </section>
          <section className="content-section">
            <div className="content-columns">
              <div className="column announcements-column">
                <div className="announcements-container">
                  <div className="announcements-list">
                    {announcements.map((announcement, index) => (
                      <AnnouncementItem
                        key={index}
                        title={announcement.title}
                        description={announcement.description}
                      />
                    ))}
                  </div>
                  <div className="announcements-pagination">
                    <div className="pagination-dots">-<br />-<br />-</div>
                  </div>
                </div>
              </div>
              <div className="column temple-info-column">
                <div className="temple-info-container">
                  <TempleHours />
                  <h2 className="section-title">Newsletter</h2>
                  <NewsletterSignup />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
}

export default HomePage;
