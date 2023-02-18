import React from 'react';
import './Header.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={logo} alt="Логотип: Место" />
        <div className='header__buttons'>
          <button className="header__buttons_signup" onClick="">
            Регистрация
          </button>
          <button className="header__buttons_signin" onClick="">
            Войти
          </button>
        </div>
    </header>
  );
}

export default Header;
