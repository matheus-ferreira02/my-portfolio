import React from 'react';
import './style.css';
import notebook from '../../images/notebook.png';

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <section className="carrousel"></section>
      <img src={ notebook } alt="notebook" />
    </section>
  );
}

export default Projects;
