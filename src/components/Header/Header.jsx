import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiHomeAlt, BiInfoCircle, BiPencil, BiBookBookmark, BiPhoneCall, BiSun, BiMoon } from "react-icons/bi";
import './style.css';

function Header() {
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxTheme, setCheckboxTheme] = useState(false);
  const { history } = useHistory();
  console.log(history.pathname);

  const alterar = () => {
    document.body.classList.toggle('dark-theme')
    setCheckboxTheme(!checkboxTheme);
  }

  return (
    <header className="header">
      <nav className="navigation">
        <label onClick={ () => setCheckbox(!checkbox) } htmlFor="checbox-menu" className="checbox-menu">
          <GiHamburgerMenu />
        </label>

        <div className={`container-menu ${checkbox && 'show-menu'}`}>
          <ul className="menu-links">
            <li>
              <a href="#home">
                <span><BiHomeAlt /></span><p>Home</p>
              </a>
            </li>

            <li>
              <a href="#about">
                <span><BiInfoCircle /></span><p>About</p>
              </a>
            </li>

            <li>
              <a href="#skills">
                <span><BiPencil /></span><p>Skills</p>
              </a>
            </li>

            <li>
              <a href="#projects">
                <span><BiBookBookmark /></span><p>Projects</p>
              </a>
            </li>

            <li>
              <a href="#contacts">
                <span><BiPhoneCall /></span><p>Contacts</p>
              </a>
            </li>
          </ul>
          
          <div className="empty-container" onClick={ () => setCheckbox(!checkbox) } />
        </div>

        <div className="checkbox-theme">
          { checkboxTheme ? <BiMoon /> : <BiSun />}
          <input onChange={ alterar } type="checkbox" />
        </div>
      </nav>
    </header>
    
  )
}

export default Header