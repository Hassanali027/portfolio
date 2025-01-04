import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const downloadCV = () => {
    const cvURL = 'https://drive.google.com/file/d/1tbRRJjmGXnmA9FEav2QauKpop9kJO9sD/view?usp=drive_link';
    window.open(cvURL, '_blank');
  };

  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <h1>Hassan</h1>
      </div>
      <div className="Navbar-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><button className="cv-button" onClick={downloadCV}>CV</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
