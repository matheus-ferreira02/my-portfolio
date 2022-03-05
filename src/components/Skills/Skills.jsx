import React from 'react';
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
              <p>It is an open-source JavaScript library, created by the facebook team, to develop user interfaces, being one of the most used frameworks in the front-end market.</p>
              <a href="#">Read more</a>
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
              <p>Is a programming language that allows you to implement complex items in web pages such as creating dynamically updating content, handling multimedia and animated images.</p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1">
            <div className="content-card">
              <img width="150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="react" />
              <h3>Help</h3>
            </div>
          </div>

          <div className="face face2">
            <div className="content-card">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo odit aut mollitia dadadawdawdadad</p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Skills;
