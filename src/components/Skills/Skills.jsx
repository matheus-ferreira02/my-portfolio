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
              <p>É uma biblioteca JavaScript open-source, criado pela equipe do Facebook, para desenvolver interfaces de usuários, sendo um dos frameworks mais utilizados no mercado de front-end.</p>
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
              <p>é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web.</p>
              <a href="#">Leia mais</a>
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
              <a href="#">Leia mais</a>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Skills;
