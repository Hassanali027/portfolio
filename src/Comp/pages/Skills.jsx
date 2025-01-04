import React from 'react';

function Skills() {
  return (
    <div className='skills-container'>
      <h1 className='skills-title'>My Skills</h1>

      <div className='skills-card'>
        <div className='skill'>
          <img src="/img/html.png" alt="HTML" />
          <p className='skill-text'>HTML</p>
        </div>
        <div className='skill'>
          <img src="/img/Css.png" alt="CSS" />
          <p className='skill-text'>CSS</p>
        </div>
        <div className='skill'>
          <img src="/img/javascript-logo.png" alt="JavaScript" />
          <p className='skill-text'>JavaScript</p>
        </div>
        <div className='skill'>
          <img src="/img/react.png" alt="React" />
          <p className='skill-text'>React</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
