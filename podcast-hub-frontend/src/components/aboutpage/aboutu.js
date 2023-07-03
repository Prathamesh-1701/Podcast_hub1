// import React from 'react';
import './aboutu.css';

function AboutPage() {
  return (
    <div 
      style={{
        width: "100vw",

        display: "flex",
        flexDirection: "column",
        gap: "20px",
        boxShadow: "0px 5px 20px rgba(0,0,0,0.150)",
        padding: "2rem",
      }}
    >
      <div className='AboutB'
        style={{
          boxShadow: "0px 5px 20px rgba(0,0,0,0.150)",
          padding: "0 2rem",
          height: "fit-content",
        }}
      >
        <h2 style={{ color: "white", fontWeight: "800" }}>Our Mission</h2>
        <p>
        At Podcast Hub, we are driven by a singular mission: to provide a comprehensive platform for podcast enthusiasts worldwide. Our goal is to empower individuals to discover, listen, and share their favorite podcasts with others in a seamless and engaging manner. Through our user-friendly interface, users can explore an extensive catalog of diverse podcasts, spanning various genres and topics. They can listen to episodes, create personalized playlists, and share their recommendations with friends and fellow podcast lovers. We strive to cultivate a vibrant community where conversations flourish, fostering connections and meaningful interactions among podcast enthusiasts. Join us at Podcast Hub and embark on an exciting journey of audio exploration and discovery.rs.
        </p>
      </div>

      <div className='AboutB'
        style={{
          boxShadow: "0px 5px 20px rgba(0,0,0,0.150)",
          padding: "0 2rem",
          height: "fit-content",
        }}
      >
        <h2 style={{ color: "white", fontWeight: "800" }}>What We Offer</h2>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            color: "",
          }}
        >
          <li>
            <p>Curated selection of podcasts from various genres </p>
          </li>

          <li>
            <p> Easy-to-use search and discovery tools </p>
          </li>
          <li>
            <p>
              Personalized listening recommendations based on your preferences
            </p>
          </li>
          <li>
            <p>
              User profiles and social features for sharing and connecting with
              others
            </p>
          </li>
        </ul>
      </div>

      <div className='AboutB'
        style={{
          boxShadow: "0px 5px 20px rgba(0,0,0,0.150)",
          padding: "0 2rem",
          height: "fit-content",
        }}
      >
        <h2 style={{ color: "white", fontWeight: "800" }}>About Our Team</h2>
        <p>
          Our team is made up of passionate podcast listeners and creators who
          believe in the power of audio storytelling. We are dedicated to
          bringing you the best podcast experience possible.
        </p>

        <h2 style={{ color: "white", fontWeight: "800", fontSize: "2vmin" }}>
          Meet Our Founder
        </h2>
        <div style={{ display: "flex", gap: "40px" }}>
          <div className="founder-details">
            <h5>Prathamesh Dantkale</h5>
            {/* <p>Chief Executive Officer</p> */}
          </div>
          <div className="founder-details">
            <h5>Neha Patil</h5>
            {/* <p>Chief Content Officer</p> */}
          </div>
          <div className="founder-details">
            <h5>Shravni Kanki</h5>
            {/* <p>Chief Executive Officer</p> */}
          </div>
          <div className="founder-details">
            <h5>Akash Padwale</h5>
            {/* <p>Chief Content Officer</p> */}
          </div>
          
        </div>
      </div>

      <div className='AboutB'
        style={{
          boxShadow: "0px 5px 20px rgba(0,0,0,0.150)",
          padding: "1rem 2rem",
          height: "fit-content",
        }}
      >
        <h2 style={{ color: "white", fontWeight: "800" }}>
          Join our Community
        </h2>
        <p>
          Sign up for a free account to start discovering and sharing your
          favorite podcasts with others.
        </p>
        <a href="/Login" className="signup-button">
          Sign Up Now
        </a>
      </div>
    </div>
  );
}

export default AboutPage;

{/* <section>
  <h2>Join our Community</h2>
  <p>Sign up for a free account to start discovering and sharing your favorite podcasts with others.</p>
  <a href="/" className="signup-button">
    Sign Up Now
  </a>
</section> */}