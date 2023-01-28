import React from 'react';
import './Header.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="App-header">
        <img className="header__logo" src={logo} alt="Логотип: Место" />
        <div className='header__buttons'>
        </div>
    </header>
  );
}

export default Header;
