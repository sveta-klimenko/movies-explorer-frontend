import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

function Register() {
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
              className="auth__input input-error"
              minLength={8}
              maxLength={50}
            />
            <span className="auth__input-error-text">Что-то пошло не так...</span>
          </label>
        </fieldset>
        <div className="auth__submit">
          <button type="submit" className="auth__submit-button">
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

export default Register
