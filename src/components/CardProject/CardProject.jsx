import React from 'react';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import './style.css';

function CardProject({ name, thumb, technology, imgIndex, gitHub, site, index }) {
  return (
    <section className={ index === imgIndex ? 'card-project activeSlide' : "card-project"}>
      <a
        href={ site }
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
      <div className="container-links">
        <a
          href={ gitHub }
          target="_black"
          rel="noreferrer"
        >
          <AiOutlineGithub />
        </a>

        <a
          href={ site }
          target="_black"
          rel="noreferrer"
        >
          <AiOutlineLink />
        </a>
      </div>
      
      <section className="tecnology-icons">
        { technology.map((tecnology) => (
          <img src={ tecnology.url } alt={ tecnology.alt } />
        )) }
      </section>
    </section>
  )
}

export default CardProject;
