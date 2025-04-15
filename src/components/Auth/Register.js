import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';
import ValidationForm from '../ValidationForm/ValidationForm.js' 

function Register({onClick, apiError}) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const { values, handleChange, errors, isValid } = ValidationForm();


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
              minLength='2'
              maxLength='30'
              pattern='^[a-zA-ZА-ЯЁа-яё\s\-]{2,30}$'
              required=""
              ref={nameRef}
              onChange={handleChange}
            />
            <span className="auth__input-error-text">{errors.userName ? 'Имя должно быть длиной 2-30 символов и содержать только латиницу, кириллицу, пробел или дефис.':''}</span>
          </label>
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
            className={`auth__submit-button ${(!isValid || !values.userName || !values.email || !values.password) && 'disabled'}`} 
            onClick={handleRegistrationClick} 
            disabled={(!isValid || !values.userName || !values.email || !values.password)}
          > 
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
