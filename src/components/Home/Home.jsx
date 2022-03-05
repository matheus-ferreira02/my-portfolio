import React, { useState } from 'react';
import { BsChevronDoubleDown } from "react-icons/bs";
import './style.css';
function Home() {
  const phrases = ['Desenvolvedor Front End', 'Estudante de desenvolvimento Full Stack'];
  const [index, setIndex] = useState(0);
  const [change, setChange] = useState(true);

  /* Consultei o repositório do Lucas Petzinger para fazer o css */

  const setTitle = () => {
    setChange(true);
    if (index === phrases.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  return (
    <section id="home" className="home-container">
      <h1 className="text-home">Olá, eu sou Matheus Ferreira  <br /> e esse é o meu portfólio</h1>

      {/* Link: https://github.com/PetzingerLucas/Portfolio/blob/master/src/pages/Home.jsx */}
      <h1 onAnimationEnd={ () => {
          const ml = 250;
          setChange(false);
          setTimeout(() => { setTitle() }, ml);
        } }
        className={ `currentTitle1 ${ change && 'currentTitle2' } `}
      >
        { phrases[index] }
      </h1>
      <span className="arrow-down"><BsChevronDoubleDown /></span>
    </section>
  )
}

export default Home;
