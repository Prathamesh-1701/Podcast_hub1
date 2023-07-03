// import logo from './logo.svg';
import './App.css';
// import { Route } from 'react-router-dom';
// import './styles.css';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Podcast Hub</h1>
        <nav>
          <ul>
            
            <li><a href="http://localhost:3001/">Episodes</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">contact us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="featured-episode">
          <img className="img-class"  src="./featured-episode.jpeg" alt="/" />
          <h2>Featured Episode: Title of Episode</h2>
          <p>A brief description of the episode goes here</p>
          <button>Listen Now</button>
        </section>

        <section className="recent-episodes">
          <h2>Recent Episodes</h2>
          {/* <img className="img-class"  src="./featured-episode.jpeg" alt="/" /> */}
          <ul className="recent">
          <img className="img-class1"  src="./imgs/podnews-2000x2000.png" alt="/" />
            <li className="recent1" ><a href="/"> <h1  style={{ color: 'white'  }} >Podnews Daily</h1> </a></li>
            <img className="img-class1"  src="./imgs/lions of liberty network.jpg" alt="/" />
            <li className="recent1"><a href="/"><h1 style={{ color: 'white'  }}>Lions of Liberty Network</h1></a></li>
            <img className="img-class1"  src=".\imgs\the critshow.jpg" alt="/" />
            <li className="recent1"><a href="/"><h1 style={{ color: 'white'  }}>The Critshow</h1></a></li>
          </ul>
          
          <a href="podcast-hub-mern-master\podcast-hub-frontend\src\components\Home\Home.js"><button>View All Episodes</button></a>
        </section>

        <section className="about-us">
          <h2 style={{ color: 'white'  }}>About Podcast Hub</h2>
          <p style={{ color: 'white'  }}>A brief summary of what the podcast is about goes here</p>
          <button>Learn More</button>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Podcast Hub.</p>
      </footer>
    </div>
  );
}

export default App;
