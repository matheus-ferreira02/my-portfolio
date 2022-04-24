import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiHomeAlt, BiInfoCircle, BiPencil, BiBookBookmark, BiPhoneCall, BiSun, BiMoon } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import i18n from '../../translate/i18n';
import './style.css';

const I18N_STORAGE_KEY = 'i18nextLng';
const DARK_THEME = 'dark-theme';

function Header() {
  const [checkboxMenu, setCheckboxMenu] = useState(false);
  const [checkboxTheme, setCheckboxTheme] = useState(false);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));
  const { hash } = useLocation();
  const [heigthWindow, setHeigthWindow] = useState();
  const navigate = useNavigate();
  const [homeHeight, setHomeHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState();
  const [skillsHeight, setSkillsHeight] = useState();
  const [contactsHeight, setContactsHeight] = useState();

  const toggleClassInBody = (className) => {
    document.body.classList.toggle(className);
  }

  const toggleMenu = () => {
    setCheckboxMenu(!checkboxMenu);
    toggleClassInBody('blurred-background');
  } 

  const checkMenuStatus = () => {
    if(checkboxMenu) toggleMenu();
  }   

  const changeTheme = () => {
    localStorage.setItem(DARK_THEME, !checkboxTheme);
    toggleClassInBody(DARK_THEME);
    setCheckboxTheme(!checkboxTheme);
  }

  const handleLanguage = (name) => {
    localStorage.setItem(I18N_STORAGE_KEY, name);
    window.location.reload();
  }

  const setPositionMenu = () => {
    setHeigthWindow(window.scrollY);
    window.onscroll = () => {
      setHeigthWindow(document.scrollingElement.scrollTop);
    }
  }

  useEffect(() => {
    switch (true) {
      case heigthWindow >= 0 && heigthWindow < homeHeight:
        if(hash !== '#home') navigate('#home');
        break;
      case heigthWindow >= homeHeight && heigthWindow < aboutHeight:
        if(hash !== '#about') navigate('#about');
        break;
      case heigthWindow >= aboutHeight && heigthWindow < skillsHeight:
        if(hash !== '#skills') navigate('#skills');
        break;
      case heigthWindow >= skillsHeight && heigthWindow < contactsHeight:
        if(hash !== '#projects') navigate('#projects');
        break;
      case heigthWindow >= contactsHeight:
        if(hash !== '#contacts') navigate('#contacts');
        break;
      default:
        break;
    }
  }, [heigthWindow]);


  useEffect(() => {

    if (window.innerWidth >= 600 && window.innerWidth < 992) {
      setHomeHeight(424);
      setAboutHeight(1504);
      setSkillsHeight(4000);
      setContactsHeight(5000);
    };

    if (window.innerWidth >= 992 && window.innerWidth < 1200) {
      setHomeHeight(500);
      setAboutHeight(1600);
      setSkillsHeight(3500);
      setContactsHeight(4200);
    };
    if (window.innerWidth >= 1200) {
      setHomeHeight(500);
      setAboutHeight(1600);
      setSkillsHeight(2800);
      setContactsHeight(3400);
    };
  }, []);

  useEffect(() => {
    const darkTheme = localStorage.getItem(DARK_THEME) || 'false';
    if (darkTheme === 'true') {
      toggleClassInBody(DARK_THEME);
      setCheckboxTheme(true);
    }
    setPositionMenu();
  }, []);

  return (
    <header className="header">
      <nav className="navigation">
        <button
          type="button"
          onClick={ toggleMenu }
          htmlFor="checbox-menu"
          className="checbox-menu"
        >
          <GiHamburgerMenu />
        </button>

        <div className={`container-menu ${checkboxMenu && 'show-menu'}`}>
          <ul className="menu-links">
            <li className={ hash === '#home' ? 'selected-menu' : 0 }>
              <a onClick={ checkMenuStatus } href="#home">
                <span><BiHomeAlt /></span>

                <p>{ i18n.t('menu.home')}</p>
              </a>
            </li>

            <li className={ hash === '#about' ? 'selected-menu' : 0 }>
              <a onClick={ checkMenuStatus } href="#about">
                <span><BiInfoCircle /></span>

                <p>{ i18n.t('menu.about')}</p>
              </a>
            </li>

            <li  className={ hash === '#skills' ? 'selected-menu' : 0 }>
              <a onClick={ checkMenuStatus } href="#skills">
                <span><BiPencil /></span>

                <p>{ i18n.t('menu.technologies')}</p>
              </a>
            </li>

            <li  className={ hash === '#projects' ? 'selected-menu' : 0 }>
              <a onClick={ checkMenuStatus } href="#projects">
                <span><BiBookBookmark /></span>

                <p>{ i18n.t('menu.projects')}</p>
              </a>
            </li>

            <li className={ hash === '#contacts' ? 'selected-menu' : 0 }>
              <a onClick={ checkMenuStatus } href="#contacts">
                <span><BiPhoneCall /></span>
                <p>{ i18n.t('menu.contacts')}</p>
              </a>
            </li>
          </ul>
          
         {/*  eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            onClick={ checkMenuStatus }
            type="button"
            className="empty-container"
          />
        </div>

        <div className="options-container">
          <section className="checkbox-theme">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="checkbox-theme">
              <BiMoon />
              <BiSun />
            </label>
              
            <input
              onChange={ changeTheme }
              type="checkbox"
              checked={ checkboxTheme }
              id="checkbox-theme"
            />
          </section>

          <section className="select-container">
            <span className="label-input">
              { i18n.t('messages.language') }
            </span>

            <section className="dropdown">
              <div>
                <span className="select">
                  { language === 'en-US'
                    ? <img src="https://www.svgrepo.com/show/248851/united-states.svg" alt="flag" />
                    : <img src="https://www.svgrepo.com/show/248829/brazil.svg" alt="flag" />
                  }
                </span>
                <FiChevronDown />
              </div>

              <div className="dropdown-list">
                <div
                  name={ language === 'pt-BR' ? 'en-US' : 'pt-BR' }
                  aria-hidden="true"
                  onClick={ () => handleLanguage(
                      language === 'pt-BR'
                      ? 'en-US'
                      : 'pt-BR'
                    )
                  }
                  className="dropdown-list__item"
                >
                  { language === 'en-US'
                    ? <img
                        src="https://www.svgrepo.com/show/248829/brazil.svg"
                        alt="flag-language"
                      />
                    : <img
                        src="https://www.svgrepo.com/show/248851/united-states.svg"
                        alt="flag-language"
                      />
                  }
                </div>
              </div>
              
            </section>
          </section>
        </div>
      </nav>
    </header>
  );
}

export default Header;
