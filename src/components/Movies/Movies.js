import React from 'react';
import './MainFilm.css';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';



function MainFilm() {
    return (
        <>
        <SearchForm/>
        <MoviesCardList/>
        </>
    )
}

export default MainFilm;