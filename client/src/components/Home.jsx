import React, {useState} from "react";
import "./styles/Home.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Banner from "../images/omkaar.png";
//import BG from "../images/background.PNG";

const AnnouncementItem = ({ title, description, expanded, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="announcement-item">
      <div className="announcement-title">{title}</div>
      {expanded && <div className="announcement-description">{description}</div>}
      {!expanded && (
        <div className="announcement-expand" >
          <button className="announcement-expand-text" onClick={handleClick}>&#9660;</button> {/* Down arrow symbol */}
        </div>
      )}
    </div>
  );
};

const announcements = [
  {
    title: "Jan 21, 2024: Ayodhya ramamandir prana prathistapana mahothsavam",
    description:
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
  },
  {
    title: "🌟 **Navarathri Celebration at Omkaar Temple** 🌟",
    description: 
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
  },
  {
    title: "Hanuman Jayanthi on Sunday May 21st, 2017 @ 5pm",
    description: 
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
  },
  {
    title: "Cultural Music Event at Omkaar Temple on 4/28/2017",
    description: 
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
  },
  {
    title: "Jan 21, 2024: Ayodhya ramamandir prana prathistapana mahothsavam",
    description:
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
  },
  {
    title: "Jan 21, 2024: Ayodhya ramamandir prana prathistapana mahothsavam",
    description:
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
  },
  {
    title: "Jan 21, 2024: Ayodhya ramamandir prana prathistapana mahothsavam",
    description:
      "In support to Rama mandhir Prana prathishtapana at Ayodya, India, Omkaar Temple Fort Wayne, IN, USA is posting the following events. We invite all devotees to join us, participate and make this memorable. January 21st 2024, 5:30 pm arranged samuhika Sri Rama tulasi archana with sri raama tharaka 108 mantra japam. Sri Rama Pooja @ 5:30pm Arathi @ 6:30pm All are welcome 🙏 🕉️ 🙏 Jai Sri Ram.",
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
      <a href="https://www.google.com/maps/place/Omkaar+Temple/@41.1158296,-85.3360281,17z/data=!3m1!4b1!4m5!3m4!1s0x8815de98058d4389:0xbacc97d8d7f4dbaa!8m2!3d41.1158514!4d-85.3338393?shorturl=1">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a6ac57d3f0c241adf241dcf9a21e6927aac676ab0f2e3e796591213b0edc307?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
          alt="Temple location map"
          className="temple-map"
        />
      </a>
      <a href="https://maps.apple.com/place?q=Omkaar%20Temple&ll=41.1157161%2C-85.3338632&auid=18339372791188327544&lsp=9902&address=14745%20Yellow%20River%20Rd%2C%20Fort%20Wayne%2C%20IN%20%2046818%2C%20United%20States">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7928995020c9784452fdade412b0d652054e02a06a738b0c8a01d281668713c?apiKey=0a7c2887b1ad4700964c6779ce9bea19&"
          alt="Temple location map"
          className="temple-map"
        />
      </a>
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
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1); // Collapse the clicked announcement if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked announcement
    }
  };

  const filteredAnnouncements = announcements.filter((announcement) =>
    announcement.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <img
        loading="lazy"
        src = {Banner}
        alt="Omkaar Temple banner"
        className="banner-image"
      />
      <Navigation />
      <main className="main-content">
        {/* <img
          loading="lazy"
          src={BG}
          alt="Temple background"
          className="background-image"
        /> */}
        <div className="announcements-section">
          <h2 className="section-title">Announcements</h2>
          <input
            type="text"
            placeholder="Search announcements..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <h2>Temple Hours</h2>
        </div>
        <section className="content-section">
          <div className="content-columns">
            <div className="column announcements-column">
              <div className="announcements-container">
                <div className="announcements-list">
                  {filteredAnnouncements.map((announcement, index) => (
                    <AnnouncementItem
                      key={index}
                      title={announcement.title}
                      description={announcement.description}
                      expanded={index === expandedIndex}
                      onClick={() => handleExpand(index)}
                    />
                  ))}
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
      <Footer />
      </div>
  );
}

export default HomePage;