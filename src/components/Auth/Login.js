import { Link } from 'react-router-dom';
import React, { useRef } from "react";
import './Auth.css';
import logo from '../../images/logo.svg';
import ValidationForm from '../ValidationForm/ValidationForm.js' 

function Login({onClick, apiError}) {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { handleChange, errors, isValid } = ValidationForm();


  function handleLoginClick(e){
    e.preventDefault();
    onClick({email:emailRef.current.value, password:passwordRef.current.value})
  }

  return (
    <main className="auth">
      <form className="auth__form">
      <Link to='/'>
        <img className="auth__logo" src={logo} alt="Логотип" />
      </Link>
        <h1 className="auth__header">Рады видеть!</h1>
        <fieldset className="auth__fieldset auth__login">
        <label className="auth__label">
            E-mail
            <input
              id="email__input"
              name="email"
              type="email"
              placeholder="e-mail"
              className="auth__input"
              pattern=".+@.+\..+" 
              required=""
              ref={emailRef}
              onChange={handleChange}
            />
            <span className="auth__input-error-text">{errors.email}</span>
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
              onChange={handleChange}
            />
            <span className="auth__input-error-text">{errors.password}</span>
          </label>
        </fieldset>
        <div className="auth__submit">
          <span className="auth__input-error-text">{apiError}</span>
          <button type="submit" 
            className={`auth__submit-button ${!isValid && 'disabled'}`} 
            onClick={handleLoginClick}
            disabled={!isValid}
          >
            Войти
          </button>
          <span className="auth__subtitle">
            Ещё не зарегистрированы?
            <Link to="/signup" className="auth__link">
              Регистрация
            </Link>
          </span>
        </div>
      </form>
    </main>
  );
}

export default Login;
