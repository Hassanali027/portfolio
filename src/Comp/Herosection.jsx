import React from 'react';

function Herosection() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Hey, I'm <span>Syed Hassan</span></h1>
        <p>Front-End Developer</p>
        <button onClick={() => window.location.href = 'mailto:shassanali223@gmail.com'}>Hire Me</button>

      </div>
      <div className="hero-image">
        <img src="/img/bitemojy.jpg" alt="hero section" />
      </div>
    </div>
  );
}

export default Herosection;
