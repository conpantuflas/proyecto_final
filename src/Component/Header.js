import React from 'react'
import "./Header.css"
import logo from './images/logo.png'
import menu from './images/menu.png'


function Header() {
  return (

    <div>
      <header className="header">
        <div className="logo-header">
          <a href><img src={logo} alt /></a>
        </div>

        <div className="titulo">
          <h3>Your Recipes Online</h3>
        </div>
        <div className="nav-menu">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="menu-icon"><img src={menu} alt /></i>
          </label>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Sign up</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </header>

    </div>

  );
}

export default Header;