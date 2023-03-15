import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';



function SavedMovies({onToggleClick, isToggleShort}) {
    return (
        <>
        <SearchForm isToggleShort={isToggleShort} onToggleClick={onToggleClick}/>
        <MoviesCardList isSaved={true}/>
        </>
    )
}

export default SavedMovies;