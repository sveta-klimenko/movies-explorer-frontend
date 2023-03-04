import React from 'react';
import './Header.css';
import logo from "../../images/logo.svg";
import burger from "../../images/burger.svg"
import close from "../../images/close.svg"
import { NavLink } from "react-router-dom";


function Header({
  isAutorized = false, 
  isBurger = true, 
  isHeaderVisible, 
  isBurgerOpen, 
  onClick, 
  onClose
}) {
  return (
    <header className={`header ${!isHeaderVisible && "header-none"}`}>
      {isHeaderVisible && !isAutorized && 
      <>
        <NavLink to='/'>
          <img className="header__logo" src={logo} alt="Логотип" />
        </NavLink>
        <div className='header__buttons'>
          <NavLink to="/signup" className="header__signup">Регистрация</NavLink>
          <NavLink to="/signin" className="header__signin">Войти</NavLink>
        </div>
      </>}
      {isHeaderVisible && isAutorized && !isBurger && 
      <>
        <NavLink to='/'>
          <img className="header__logo" src={logo} alt="Логотип" />
        </NavLink>
        <div className='header__buttons'>
          <NavLink to="/movies" className="header__film">Фильмы</NavLink>
          <NavLink to="/saved-movies" className="header__film">Сохраненные фильмы</NavLink>
          <NavLink to="/profile" className="header__profile">Аккаунт</NavLink>
        </div>
      </>}
      {isHeaderVisible && isAutorized && isBurger && 
      <>
        <NavLink to='/'>
          <img className="header__logo" src={logo} alt="Логотип" />
        </NavLink>
        <img className="header__burger" src={burger} alt="Открыть меню" onClick={onClick} />
        <div className={`header__burger-overlay ${isBurgerOpen && "header__burger-opened"}`}>
          <div className='header__burger-menu'>
            <img className="header__burger-close" src={close} alt="Закрыть меню" onClick={onClose} />
            <NavLink to="/" className="header__film">Главная</NavLink>
            <NavLink to="/movies" className="header__film">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="header__film">Сохраненные фильмы</NavLink>
            <NavLink to="/profile" className="header__profile account">Аккаунт</NavLink>
          </div>
        </div>
      </>}
    </header>
  );
}

export default Header;
