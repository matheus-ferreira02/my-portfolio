import React from 'react';
import  { Link } from 'react-router-dom';
import projects from '../../data';
import './style.css';

function CardProject() {
  return (
    <section className="card-project">
      { projects.map(({ name, thumb, technologyIcons, urlGitHub, urlSite }) => (
        <section className="card" key={ name }>
          <a
            href={ urlSite }
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="thumb-project"
              style={{ backgroundImage: `url(${ thumb })` }}
            />
          </a>
          
          <h3>{ name }</h3>
          <a
            href={ urlGitHub }
            target="_black"
            rel="noreferrer"
          >
            Github
          </a>

          <a
            href={ urlSite }
            target="_black"
            rel="noreferrer"
          >
            Site
          </a>
          <section className="tecnology-icons">
            { technologyIcons.map((tecnology) => (
              <img src={ tecnology.url } alt={ tecnology.alt } />
            )) }
          </section>
        </section>
      )) }      
    </section>
  )
}

export default CardProject;
