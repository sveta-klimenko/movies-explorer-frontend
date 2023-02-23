import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';



function Movies() {
    return (
        <>
        <SearchForm/>
        <MoviesCardList isSaved={false}/>
        </>
    )
}

export default Movies;