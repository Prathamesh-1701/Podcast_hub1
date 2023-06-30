import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <>
        <nav className="navigation sticky">
          <div className="navigation-inner">
            <div className="logo">
              <Link to="/">
                <h1>
                  Podcast Hub <i  className="fas fa-microphone-alt logo-icon"></i>
                </h1>
              </Link>
            </div>
            <header>
              <ul>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home <i className="fas fa-microphone-alt logo-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/hom" className="nav-link">
                    Episodes <i className="fas fa-microphone-alt logo-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutu" className="nav-link">
                    About <i className="fas fa-microphone-alt logo-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact Us <i className="fas fa-microphone-alt logo-icon"></i>
                  </Link>
                </li>
              </ul>
            </header>
            <div className="link-container">
              <Link to="#" className="navigation-button" onClick={this.props.addPodcast1}>
                {/* Add Podcast */}
                Log in
              </Link>
              {/* <Link to="login" className="navigation-button">Login / Register</Link> */}
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navigation;


          // <ul>
          // <Link to="/"><h1>Home <i className="fas fa-microphone-alt logo-icon"></i> </h1></Link> 
          // <Link to="/hom"><h1>Episodes <i className="fas fa-microphone-alt logo-icon"></i> </h1></Link> 
          // <Link to="/aboutu"><h1>About <i className="fas fa-microphone-alt logo-icon"></i> </h1></Link> 
          // <Link to="/contact"><h1>contact us <i className="fas fa-microphone-alt logo-icon"></i> </h1></Link> 
            
          // </ul>