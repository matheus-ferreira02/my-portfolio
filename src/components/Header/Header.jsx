import React, { useState, useEffect } from 'react';
import i18n from '../../translate/i18n';
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiHomeAlt, BiInfoCircle, BiPencil, BiBookBookmark, BiPhoneCall, BiSun, BiMoon } from 'react-icons/bi';
import './style.css';

const I18N_STORAGE_KEY = 'i18nextLng';
const DARK_THEME = 'dark-theme';

function Header() {
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxTheme, setCheckboxTheme] = useState(false);
  const [language] = useState(localStorage.getItem(I18N_STORAGE_KEY));

  const { hash } = useLocation();

  const changeBackground = () => {
    setCheckbox(!checkbox);
    document.body.classList.toggle('blurred-background')
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

  const handleLanguage = ({ target }) => {
    localStorage.setItem(I18N_STORAGE_KEY, target.value);
    window.location.reload();
  }

  return (
    <header className="header">
      <nav className="navigation">
        <label
          onClick={ changeBackground }
          htmlFor="checbox-menu"
          className="checbox-menu"
        >
          <GiHamburgerMenu />
        </label>

        <div className={`container-menu ${checkbox && 'show-menu'}`}>
          <ul className="menu-links">
            <li className={ hash === '#home' ? 'selected' : 0 }>
              <a href="#home">
                <span><BiHomeAlt /></span>
                <p>{ i18n.t('menu.home')}</p>
              </a>
            </li>

            <li className={ hash === '#about' ? 'selected' : 0 }>
              <a href="#about">
                <span><BiInfoCircle /></span>
                <p>{ i18n.t('menu.about')}</p>
              </a>
            </li>

            <li  className={ hash === '#skills' ? 'selected' : 0 }>
              <a href="#skills">
                <span><BiPencil /></span>
                <p>{ i18n.t('menu.technologies')}</p>
              </a>
            </li>

            <li  className={ hash === '#projects' ? 'selected' : 0 }>
              <a href="#projects">
                <span><BiBookBookmark /></span>
                <p>{ i18n.t('menu.projects')}</p>
              </a>
            </li>

            <li className={ hash === '#contacts' ? 'selected' : 0 }>
              <a href="#contacts">
                <span><BiPhoneCall /></span>
                <p>{ i18n.t('menu.contacts')}</p>
              </a>
            </li>
          </ul>
          
          <div className="empty-container" onClick={ changeBackground } />
        </div>

        <div>
          <select onChange={ handleLanguage } value={ language }>
            <option value="pt-BR">Portuguese(PT-BR)</option>
            <option value="en-US">English(US)</option>
          </select>

          <div className="checkbox-theme">
            { checkboxTheme ? <BiMoon /> : <BiSun />}
            <input
              onChange={ changeTheme }
              type="checkbox"
              checked={ checkboxTheme }
            />
          </div>
        </div>

        
      </nav>
    </header>
  )
}

export default Header;
