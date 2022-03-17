import React from 'react';
import './style.css';
import i18n from '../../translate/i18n';
import notebook from '../../images/notebook.png';
import CardProject from '../CardProject/CardProject';

function Projects() {
  return (
    <section className="projects-container">
      <h1 id="projects" className="title-container">{ i18n.t('menu.projects')}</h1>
      <section className="projects">
        <section className="carrousel">
          <CardProject />
        </section>
        <img src={ notebook } alt="notebook" className="notebook" />
      </section>
    </section>
    
  );
}

export default Projects;
