import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

function Register({onClick}) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  function handleRegistrationClick(e){
    e.preventDefault();
    onClick({name:nameRef.current.value, email:emailRef.current.value, password:passwordRef.current.value})
  }
  return (
    <main className="auth">
      <form className="auth__form">
      <Link to='/'>
        <img className="auth__logo" src={logo} alt="Логотип" />
      </Link>
        <h1 className="auth__header">Добро пожаловать!</h1>
        <fieldset className="auth__fieldset">
          <label className="auth__label">
            Имя
            <input
              id="name__input"
              name="userName"
              type="text"
              placeholder="Имя"
              className="auth__input"
              required=""
              ref={nameRef}
            />
            <span className="auth__input-error-text" />
          </label>
          <label className="auth__label">
            E-mail
            <input
              id="email__input"
              name="email"
              type="email"
              placeholder="e-mail"
              className="auth__input"
              required=""
              ref={emailRef}
            />
            <span className="auth__input-error-text" />
          </label>
          <label className="auth__label">
            Пароль
            <input
              id="password__input"
              name="password"
              type="password"
              placeholder="Пароль"
              className="auth__input"
              minLength={8}
              maxLength={50}
              ref={passwordRef}
            />
            <span className="auth__input-error-text"></span>
          </label>
        </fieldset>
        <div className="auth__submit">
          <button type="submit" className="auth__submit-button" onClick={handleRegistrationClick}>
            Зарегистрироваться
          </button>
          <span className="auth__subtitle">
            Уже зарегистрированы?
            <Link to="/signin" className="auth__link">
              Войти
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default Register;
