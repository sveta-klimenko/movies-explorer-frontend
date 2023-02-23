import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';



function SavedMovies() {
    return (
        <>
        <SearchForm/>
        <MoviesCardList isSaved={true}/>
        </>
    )
}

export default SavedMovies;