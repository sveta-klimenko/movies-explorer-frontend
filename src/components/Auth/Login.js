import { Link } from 'react-router-dom';
import './Auth.css';
import logo from '../../images/logo.svg';

function Login() {
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
              className="auth__input"
              minLength={8}
              maxLength={50}
            />
            <span className="auth__input-error-text"></span>
          </label>
        </fieldset>
        <div className="auth__submit">
          <button type="submit" className="auth__submit-button">
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
