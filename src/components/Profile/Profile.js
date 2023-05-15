import React, { useRef } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile({onLogoutClick, onChangeClick}) {
  const currentUser = React.useContext(CurrentUserContext);
  const emailRef = useRef();
  const nameRef = useRef();

  function handleLogout(e){    
    e.preventDefault();
    onLogoutClick();
  }

  function handleInfoChange(e){
    e.preventDefault();
    onChangeClick({email:emailRef.current.value, name:nameRef.current.value});
  }

  return (
    <div className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, {currentUser.data.name}!</h2>
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
              pattern='^[a-zA-ZА-ЯЁа-яё\s\-]{2,30}$'
              required=""
              defaultValue={currentUser.data.name}
              ref={nameRef}
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
              pattern=".+@.+\..+" 
              required=""
              defaultValue={currentUser.data.email}
              ref={emailRef}
            />
          </span>
        </label>
      </fieldset>
      <div className="profile__buttons">
            <button type="submit" className="profile__save" onClick={handleInfoChange}>Редактировать</button>
            <button to="/" className="profile__logout" onClick={handleLogout}>Выйти из аккаунта</button>
        </div>
    </div>
  )
}

export default Profile;