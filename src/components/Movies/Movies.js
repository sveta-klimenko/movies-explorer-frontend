import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';

function Movies({foundMovies,
    savedMovies, 
    searchValue, 
    setSearchValue, 
    onToggleClick, 
    isToggleShort, 
    isLoading, 
    onSearchClick,
    onSave,
    onDelete}) {
    
    return (
        <>
        <SearchForm 
            isToggleShort={isToggleShort} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onToggleClick={onToggleClick} 
            onSearchClick={onSearchClick}
            />
        <MoviesCardList 
            foundMovies={foundMovies}
            savedMovies={savedMovies} 
            isLoading={isLoading} 
            isSaved={false} 
            onSave={onSave} 
            onDelete={onDelete} 
            />
        </>
    )
}

export default Movies;