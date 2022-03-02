import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './style.css';

function Header() {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <header className="header">
      <nav className="navigation">
        <label onClick={ () => setCheckbox(!checkbox) } htmlFor="checbox-menu" className="checbox-menu">
          <GiHamburgerMenu />
        </label>

        <div className={`container-menu ${checkbox && 'show-menu'}`}>
          <ul className="menu-links">
            <li>teste</li>
            <li>duduududu</li>
          </ul>
          
          <div className="empty-container" onClick={ () => setCheckbox(!checkbox) } />
        </div>
        
        <button className="btn-theme">alterar tema</button>
      </nav>
    </header>
    
  )
}

export default Header