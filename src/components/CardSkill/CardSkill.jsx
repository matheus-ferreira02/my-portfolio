import React from 'react';
import PropTypes from 'prop-types';
import i18n from '../../translate/i18n';
import './style.css';

function CardSkill({ title, text, icon, link }) {
  return (
    <>
      <div className="card">
        <div className="face face1">
          <div className="content-card">
            { icon }
            <h3>{ title }</h3>
          </div>
        </div>

        <div className="face face2">
          <div className="content-card">
            <p>{ i18n.t(text) }</p>
            <a
              href={ link }
              target="_black"
              rel="noreferrer noopener"
            >
              { i18n.t('skills.read') }
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

CardSkill.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.objectOf,
}.isRequired;

export default CardSkill;
