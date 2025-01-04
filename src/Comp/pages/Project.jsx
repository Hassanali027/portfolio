import React from 'react';

const ProjectSection = () => {
  const projects = [
    {
      title: 'Spotify Clone',
      description: 'A clone of the popular music streaming service.',
      link: 'https://hassanali905.netlify.app/',
      image: '/img/spotify pic.jpg',
    },
    {
      title: 'Expense Tracker',
      description: 'An application to track your expenses and manage your budget effectively.',
      link: 'https://expensetrackercalculator.netlify.app/',
      image: '/img/expenseT.jpg',
    },
    {
      title: 'Weather App',
      description: 'A simple weather application that provides current weather information.',
      link: 'https://wetherpp.netlify.app/',
      image: '/img/rain.png',
    },
  ];

  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
