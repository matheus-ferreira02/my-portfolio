import React from 'react';
import './style.css';
import notebook from '../../images/notebook.png';
import CardProject from '../CardProject/CardProject';

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <section className="carrousel">
        <CardProject />
      </section>
      <img src={ notebook } alt="notebook" className="notebook" />
    </section>
  );
}

export default Projects;
