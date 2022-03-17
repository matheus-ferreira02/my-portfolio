import React from 'react';
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
          <p>Lorem ipsum dolor sit amet. Ea labore quia et deserunt earum qui numquam nulla. 33 cumque blanditiis quidem voluptatem aut natus vero!</p>
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
