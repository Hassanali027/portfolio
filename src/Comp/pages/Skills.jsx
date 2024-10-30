import React from 'react';


function Skills() {
  return (
    <div className='Cards'>
      <h1 id='title'>My Skills</h1>

      <div className='card'>
        <div className='skill'>
          <img src="/img/html.png" alt="HTML" />
          <p className='text'>HTML</p>
        </div>
        <div className='skill'>
          <img src="/img/Css.png" alt="CSS" />
          <p className='text'>CSS</p>
        </div>
        <div className='skill'>
          <img src="/img/javascript-logo.png" alt="JavaScript" />
          <p className='text'>JavaScript</p>
        </div>
        <div className='skill'>
          <img src="/img/react.png" alt="React" />
          <p className='text'>React</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;