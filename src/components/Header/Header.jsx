import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.css';

function Header() {
  const [checkbox, setCheckbox] = useState(false);
  const teste = () => {
    setCheckbox(!checkbox);
    console.log('foi');
  }
  return (
    <header className="header">
      <nav className="navigation">
        <label onClick={ () => teste() } htmlFor="checbox-menu" className="checbox-menu">
          <GiHamburgerMenu />
        </label>
        <input className="input-checkbox" type="checkbox" id="checbox-menu" />
        <ul className="menu-links">
          <li>oi</li>
          <li>eeee</li>
          <li>teste</li>
          <li>duduududu</li>
          <div onClick={ () => teste() }>oi</div>
        </ul>
        
        <button className="btn-theme">alterar thema</button>
      </nav>
    </header>
    
  )
}

export default Header