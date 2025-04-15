import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import {useLocation} from "react-router";

function SearchForm({onToggleClick, searchValue, setSearchValue, isToggleShort, onSearchClick}) {

  const location = useLocation();
  const routeSaved = location.pathname === '/saved-movies';
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    onSearchClick(searchValue);
  }, [isToggleShort]);

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('isToggleShort', isToggleShort);
    onSearchClick(searchValue);
  }

  function handleToggle() {
    onToggleClick();
  }

    return (
      <section className="search-form">
        <div className="search-form__full">
          <form className="search-form__form">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              onChange={(e) => setSearchValue(e.target.value)}
              defaultValue = {routeSaved ? "" : searchValue}
              required
            />
            <button className="search-form__button" type="submit" onClick={handleSubmit}></button>
          </form>
          <div className="search-form__decorline"> </div>         
          <label className="search-form__short-filter">
            <input
              className="search-form__checkbox"
              type="checkbox"
            />
            <span className={`search-form__toggle ${!isToggleShort && "toggle-off"}`} onClick={handleToggle}></span>
            <span className="search-form__name">Короткометражки</span>
          </label>
        </div>
    </section>
  );
}

export default SearchForm;