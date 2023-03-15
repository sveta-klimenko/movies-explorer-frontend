import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
    return (
      <div className="profile">
        <form className="profile__form">
          <h2 className="profile__title">Привет, Виталий!</h2>
        </form>   
        <fieldset className="profile__fieldset">
          <label className="profile__label">
            <span className="profile__field">
              Имя
              <input
                id="name__input"
                name="userName"
                type="text"
                placeholder="Имя"
                className="profile__input"
                required=""
                defaultValue="Виталий"
              />
            </span>
          </label>
          <hr className="profile__line" />
          <label className="profile__label">
            <span className="profile__field">
              E-mail
              <input
                id="email__input"
                name="email"
                type="email"
                placeholder="E-mail"
                className="profile__input"
                required=""
                defaultValue="pochta@yandex.ru"
              />
            </span>
          </label>
        </fieldset>
        <div className="profile__buttons">
              <button type="submit" className="profile__save">Редактировать</button>
              <Link to="/" className="profile__logout">Выйти из аккаунта</Link>
          </div>
      </div>
    )
}

export default Profile;