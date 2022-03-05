import React, { useState } from 'react';
import i18n from '../../translate/i18n';
import { BsChevronDoubleDown } from "react-icons/bs";
import './style.css';
function Home() {
  const phrases = i18n.t('messagesHome.smallText', { returnObjects: true });
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
      <h1 className="text-home">
        { i18n.t('messagesHome.title') }
        <br />
        { i18n.t('messagesHome.title2') }
      </h1>

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
