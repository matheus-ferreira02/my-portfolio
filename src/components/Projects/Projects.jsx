import React, { useState } from 'react';
import projects from '../../data';
import './style.css';
import i18n from '../../translate/i18n';
import notebook from '../../images/notebook.png';
import Slider from 'react-slick';
import CardProject from '../CardProject/CardProject';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Projects() {
  const [imgIndex, setImgIndex] = useState(0);

  function PrevArrow({ onClick }) {
    return (
      <button className="button-prev" onClick={ onClick }>
        <IoIosArrowBack />
      </button>
    );
  }
  
  function NextArrow({ onClick }) {
    return (
      <button className="button-next" onClick={ onClick }>
        <IoIosArrowForward />
      </button>
    );
  }

  const settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "20%",
    dots: true,
    speed: 300,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (__current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "10%",
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "15%",
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: "25%",
          dots: true,
        }
      },
    ]
  };

  return (
    <section className="projects-container">
      <h1 id="projects" className="title-container">{ i18n.t('menu.projects')}</h1>
      <section className="projects">
        <section className="carousel">
          <Slider {...settings}>
            { projects.map((project, index) => (
              <CardProject
                key={ project.name }
                imgIndex={ imgIndex }
                index={ index }
                name={ project.name }
                thumb={ project.thumb }
                technology={ project.technologyIcons }
                gitHub={ project.urlGitHub }
                site={ project.urlSite }
                about={ project.about }
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
