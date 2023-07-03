import React from 'react'
import { Link } from 'react-router-dom';
import "./home1.css"
export default function Home1() {
  return (
    <>
      <main>
        <section className="featured-episode">
          <img
            className="img-class"
            src=".\imgs\featured-episode.jpg"
            alt="/"
          />
          <h2 style={{ color: "black" }}>Featured Episode: Title of Episode</h2>
          <p style={{ color: "black" }}>
            A brief description of the episode goes here
          </p>
          <button>Listen Now</button>
        </section>

        <section className="recent-episodes">
          <h2 style={{ margin: "2rem", fontWeight: "600", fontsize: "4vmin" }}>
            Recent Episodes
          </h2>
          {/* <img className="img-class"  src="./featured-episode.jpeg" alt="/" /> */}
          <div className="allpodcasts">
            <div className="imageandiv">
              <img
                className="img-class1"
                src=".\imgs\podnews-2000x2000.png"
                alt="/"
              />
              <a href="/">
                <h1 className="he" style={{ color: "black" }}>
                  Podnews Daily
                </h1>
              </a>
            </div>

            <div className="imageandiv">
              <img
                className="img-class1"
                src=".\imgs\lions of liberty network.jpg"
                alt="/"
              />
              <a href="/">
                <h1 className="he" style={{ color: "black" }}>
                  Lions of Liberty Network
                </h1>
              </a>
            </div>
            <div className="imageandiv">
              <img
                className="img-class1"
                src=".\imgs\the critshow.jpg"
                alt="/"
              />

              <a href="/">
                <h1 className="he" style={{ color: "black" }}>
                  The Critshow
                </h1>
              </a>
            </div>
          </div>
          <Link to="/hom">
            <button style={{ marginTop: "2rem" }}>View All Episodes</button>
          </Link>

          {/* <button >View All Episodes</button> */}
        </section>

        <section className="about-us">
          <h2 style={{ color: "white" }}>About Podcast Hub</h2>
          <p style={{ color: "white" }}>
            A brief summary of what the podcast is about goes here
          </p>
          <button>Learn More</button>
        </section>
      </main>
    </>
  );
}
