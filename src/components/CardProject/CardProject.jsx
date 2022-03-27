import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import i18n from '../../translate/i18n';
import './style.css';

function CardProject({ name, thumb, technology, imgIndex, gitHub, site, index, about }) {
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
      <p>{ i18n.t(`projects.${about}`)}</p>
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
          <img key={ tecnology.alt } src={ tecnology.url } alt={ tecnology.alt } />
        )) }
      </section>
    </section>
  );
}

CardProject.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
  technology: PropTypes.arrayOf,
  imgIndex: PropTypes.string,
  gitHub: PropTypes.string,
  site: PropTypes.string,
  index: PropTypes.string,
  about: PropTypes.string,
}.isRequired;

export default CardProject;
