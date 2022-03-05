import React from 'react';
import i18n from '../../translate/i18n';
import './style.css';

function About() {
  return (
    <section id="about" className="about-container">
      <div className="profile-picture" />
      <p className="about-text">
        { i18n.t('about.text') }
      </p>
    </section>
  )
}

export default About;
