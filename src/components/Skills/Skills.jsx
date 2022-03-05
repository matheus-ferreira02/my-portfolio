import React from 'react';
import i18n from '../../translate/i18n';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import './style.css';

function Skills() {
  return (
    <section id="skills" className="skills-container">
      <section className="container-card">
        <div className="card">
          <div className="face face1">
            <div className="content-card">
              <FaReact />
              <h3>React</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content-card">
              <p>{ i18n.t('skills.react') }</p>
              <a href="#">Leia mais</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content-card">
              <DiJavascript1 />
              <h3>JavaScript</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content-card">
              <p>{ i18n.t('skills.javascript') }</p>
              <a href="#">Leia mais</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content-card">
              <img width="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="react" />
              <h3>Redux</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content-card">
              <p>{ i18n.t('skills.redux') }</p>
              <a href="#">Leia mais</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content-card">
              <img width="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="react" />
              <h3>RTL</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content-card">
              <p>{ i18n.t('skills.rtl') }</p>
              <a href="#">Leia mais</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Skills;
