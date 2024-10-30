import React from 'react';
import Herosection from '../Herosection';
import Skills from './Skills';
import About from './About';
import Project from './Project';
import Footer from './Footer'; 
function Home() {
  return (
    <div>
      <Herosection />
      <Skills />
      <About />
      <Project />
      <Footer/>
    </div>
  );
}

export default Home;