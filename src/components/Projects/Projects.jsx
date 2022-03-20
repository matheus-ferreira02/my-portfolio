import React from 'react';
import projects from '../../data';
import './style.css';
import i18n from '../../translate/i18n';
import notebook from '../../images/notebook.png';
import Slider from "react-slick";
import CardProject from '../CardProject/CardProject';
import settings from './settings';

function Projects() {
  return (
    <section className="projects-container">
      <h1 id="projects" className="title-container">{ i18n.t('menu.projects')}</h1>
      <section className="projects">
        <section className="carousel">
          <Slider {...settings}>
            { projects.map((project) => (
              <CardProject
                name={ project.name }
                thumb={ project.thumb }
                technology={ project.technologyIcons }
                gitHub={ project.urlGitHub }
                site={ project.urlSite }
              />
              )) }
          </Slider>
        </section>        
        <img
          src={ notebook }
          alt="notebook"
          className="notebook"
        />
      </section>
    </section>
  );
}

export default Projects;
