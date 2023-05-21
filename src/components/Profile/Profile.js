import React, { useRef, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ValidationForm from '../ValidationForm/ValidationForm.js' 


function Profile({
  onLogoutClick, 
  onChangeClick, 
  apiError, 
  setApiError, 
  isSuccesfull, 
  setIsSuccesfull
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const emailRef = useRef();
  const nameRef = useRef();

  const { values, handleChange, errors, isValid } = ValidationForm();

  useEffect(() => {
    setApiError('');
    setIsSuccesfull(false);
  }, [values]);

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
              minLength='2'
              maxLength='30'
              pattern='^[a-zA-ZА-ЯЁа-яё\s\-]{2,30}$'
              required=""
              defaultValue={currentUser.data.name}
              ref={nameRef}
              onChange={handleChange}
            />
          </span>
          <span className="profile__error">{errors.userName ? 'Имя должно быть длиной 2-30 символов и содержать только латиницу, кириллицу, пробел или дефис.':''}</span>
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
              onChange={handleChange}
            />
          </span>
          <span className="profile__error">{errors.email}</span>
        </label>
      </fieldset>
      </form>
      <div className="profile__buttons">
        <span className="profile__error">{apiError}</span>
        <span className="profile__success">{isSuccesfull && 'Обновление прошло успешно'}</span>
        <button type="submit" className={`profile__save ${(!isValid || ((!values.userName || values.userName === currentUser.data.name) || 
            (!values.email || values.email === currentUser.data.email)))? 'disabled' : ''}`} 
          onClick={handleInfoChange}
          disabled={!isValid || ((!values.userName || values.userName === currentUser.data.name) || 
            (!values.email || values.email === currentUser.data.email))}
        >Редактировать</button>
        <button to="/" className="profile__logout" onClick={handleLogout}>Выйти из аккаунта</button>
      </div>
    </div>
  )
}

export default Profile;