// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'E-Learning Platform',
    description: 'A platform for online learning.',
    link: 'https://example.com/project1'
  },
  {
    title: 'Expense Tracker',
    description: 'A web app to track expenses.',
    link: 'https://example.com/project2'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with React.',
    link: 'https://example.com/portfolio'
  }
];

const Projects = () => {
  return (
    <section id='projects'>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
