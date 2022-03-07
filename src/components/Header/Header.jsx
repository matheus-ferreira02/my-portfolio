import React, { useState, useEffect } from 'react';
import i18n from '../../translate/i18n';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiHomeAlt, BiInfoCircle, BiPencil, BiBookBookmark, BiPhoneCall, BiSun, BiMoon } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import './style.css';

const I18N_STORAGE_KEY = 'i18nextLng';
const DARK_THEME = 'dark-theme';

function Header() {
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxTheme, setCheckboxTheme] = useState(false);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  const { hash } = useLocation();

  const changeBackground = () => {
    if(checkbox) openMenu();
  }

  const openMenu = () => {
    setCheckbox(!checkbox);
    document.body.classList.toggle('blurred-background');
  }    

  useEffect(() => {
    const darkTheme = localStorage.getItem(DARK_THEME) || 'false';
    if (darkTheme === 'true') {
      document.body.classList.toggle(DARK_THEME);
      setCheckboxTheme(true)
    }
  }, [])

  const changeTheme = () => {
    localStorage.setItem(DARK_THEME, !checkboxTheme);
    document.body.classList.toggle(DARK_THEME)
    setCheckboxTheme(!checkboxTheme);
  }

  const handleLanguage = (name) => {
    localStorage.setItem(I18N_STORAGE_KEY, name);
    window.location.reload();
  }

  return (
    <header className="header">
      <nav className="navigation">
        <label
          onClick={ openMenu }
          htmlFor="checbox-menu"
          className="checbox-menu"
        >
          <GiHamburgerMenu />
        </label>

        <div className={`container-menu ${checkbox && 'show-menu'}`}>
          <ul className="menu-links">
            <li className={ hash === '#home' ? 'selected' : 0 }>
              <a onClick={ changeBackground } href="#home">
                <span><BiHomeAlt /></span>
                <p>{ i18n.t('menu.home')}</p>
              </a>
            </li>

            <li className={ hash === '#about' ? 'selected' : 0 }>
              <a onClick={ changeBackground } href="#about">
                <span><BiInfoCircle /></span>
                <p>{ i18n.t('menu.about')}</p>
              </a>
            </li>

            <li  className={ hash === '#skills' ? 'selected' : 0 }>
              <a onClick={ changeBackground } href="#skills">
                <span><BiPencil /></span>
                <p>{ i18n.t('menu.technologies')}</p>
              </a>
            </li>

            <li  className={ hash === '#projects' ? 'selected' : 0 }>
              <a onClick={ changeBackground } href="#projects">
                <span><BiBookBookmark /></span>
                <p>{ i18n.t('menu.projects')}</p>
              </a>
            </li>

            <li className={ hash === '#contacts' ? 'selected' : 0 }>
              <a onClick={ changeBackground } href="#contacts">
                <span><BiPhoneCall /></span>
                <p>{ i18n.t('menu.contacts')}</p>
              </a>
            </li>
          </ul>
          
          <div className="empty-container" onClick={ changeBackground } />
        </div>

        <div className="options-container">
          <section className="checkbox-theme">
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
            <span className="label-input">{ i18n.t('messages.language') }</span>
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
                  onClick={ () => handleLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR') }
                  className="dropdown-list__item">
                  { language === 'en-US'
                    ? <img src="https://www.svgrepo.com/show/248829/brazil.svg" alt="flag" />
                    : <img src="https://www.svgrepo.com/show/248851/united-states.svg" alt="flag" />
                  }
                </div>
              </div>
              
            </section>
          </section>
        </div>

        
      </nav>
    </header>
  )
}

export default Header;
