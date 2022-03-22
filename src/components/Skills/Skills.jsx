import React from 'react';
import i18n from '../../translate/i18n';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1, DiGit, DiCss3 } from 'react-icons/di';
import { SiRedux, SiJest } from 'react-icons/si';
import RtlIcon from '../../images/rtl.js';
import CardSkill from '../CardSkill/CardSkill';
import './style.css';

function Skills() {
  return (
    <section id="skills" className="skills-container">
      <h1>{ i18n.t('menu.technologies')}</h1>
      <section className="container-card">
        <CardSkill
          title='React'
          text={ 'skills.react' }
          icon={ <FaReact /> }
          link='https://pt-br.reactjs.org/'
        />

        <CardSkill
          title='JavaScript'
          text={ 'skills.javascript' }
          icon={ <DiJavascript1 /> }
          link='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'
        />

        <CardSkill
          title='Redux'
          text={ 'skills.redux' }
          icon={ <SiRedux /> }
          link='https://redux.js.org/'
        />

        <CardSkill
          title='RTL'
          text={ 'skills.rtl' }
          icon={ <RtlIcon /> }
          link='https://testing-library.com/docs/react-testing-library/intro/'
        />

        <CardSkill
          title='Git'
          text={ 'skills.git' }
          icon={ <DiGit /> }
          link='https://git-scm.com/'
        />

        <CardSkill
          title='Jest'
          text={ 'skills.jest' }
          icon={ <SiJest /> }
          link='https://jestjs.io/'
        />

        <CardSkill
          title='CSS'
          text={ 'skills.css' }
          icon={ <DiCss3 /> }
          link='https://developer.mozilla.org/pt-BR/docs/Web/CSS'
        />
      </section>
    </section>
  )
}

export default Skills;
