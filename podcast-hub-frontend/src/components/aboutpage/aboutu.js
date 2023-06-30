import React from 'react';
import './aboutu.css';

function AboutPage() {
  return (
    <div>
      <main>
        <section>
          <h2>Our Mission</h2>
          <p>
            At Podcast Hub, our mission is to provide a platform for podcast enthusiasts to discover, listen, and share their favorite podcasts with
            others.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>Curated selection of podcasts from various genres</li>
            <li>Easy-to-use search and discovery tools</li>
            <li>Personalized listening recommendations based on your preferences</li>
            <li>User profiles and social features for sharing and connecting with others</li>
          </ul>
        </section>

        <section>
          <h2>About Our Team</h2>
          <p>
            Our team is made up of passionate podcast listeners and creators who believe in the power of audio storytelling. We are dedicated to
            bringing you the best podcast experience possible.
          </p>
          {/* <p> </p> */}

          {/* <h3>Meet Our Founders</h3>
          <div className="founders-container">
            <div className="founder-card">
              <div className="founder-details">
                <h4>John Smith</h4>
                <p>Chief Executive Officer</p>
              </div>
            </div>
            <div className="founder-card">
              <div className="founder-details">
                <h4>Jane Doe</h4>
                <p>Chief Content Officer</p>
              </div>
            </div>
          </div> */}
        </section>

        <section>
          <h2>Join our Community</h2>
          <p>Sign up for a free account to start discovering and sharing your favorite podcasts with others.</p>
          <a href="/" className="signup-button">
            Sign Up Now
          </a>
        </section>
      </main>

      <footer>
        {/* <p>&copy; 2021 Podcast Hub. All rights reserved.</p> */}
      </footer>
    </div>
  );
}

export default AboutPage;
