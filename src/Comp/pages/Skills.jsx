import React from 'react';


function Skills() {
  return (
    <div className='Cards'>
      <h1 id='title'>My Skills</h1>

      <div className='card'>
        <div className='skill'>
          <img src="/img/html.png" alt="HTML" />
          <p className='Skill_text'>HTML</p>
        </div>
        <div className='skill'>
          <img src="/img/Css.png" alt="CSS" />
          <p className='Skill_text'>CSS</p>
        </div>
        <div className='skill'>
          <img src="/img/javascript-logo.png" alt="JavaScript" />
          <p className='Skill_text'>JavaScript</p>
        </div>
        <div className='skill'>
          <img src="/img/react.png" alt="React" />
          <p className='Skill_text'>React</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;