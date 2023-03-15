import React from 'react';
import './SearchForm.css';

function SearchForm({onToggleClick, isToggleShort}) {
    return (
      <section className="search-form">
        <div className="search-form__full">
          <form className="search-form__form">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              required
            />
            <button className="search-form__button" type="submit"></button>
          </form>
          <div className="search-form__decorline"> </div>         
          <label className="search-form__short-filter">
            <input
              className="search-form__checkbox"
              type="checkbox"
            />
            <span className={`search-form__toggle ${!isToggleShort && "toggle-off"}`} onClick={onToggleClick}></span>
            <span className="search-form__name">Короткометражки</span>
          </label>
        </div>
    </section>
  );
}

export default SearchForm;