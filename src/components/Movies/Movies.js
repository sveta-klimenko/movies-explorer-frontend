import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import Preloader from  './Preloader/Preloader.js'



function Movies({onToggleClick, isToggleShort}) {
    return (
        <>
        <SearchForm isToggleShort={isToggleShort} onToggleClick={onToggleClick}/>
        <Preloader/>
        <MoviesCardList isSaved={false}/>
        </>
    )
}

export default Movies;