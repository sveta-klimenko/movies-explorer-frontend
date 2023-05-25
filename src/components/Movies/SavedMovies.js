import React from "react";
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';



function SavedMovies({foundMovies, 
    searchValue, 
    setSearchValue, 
    onToggleClick, 
    isToggleShort, 
    isLoading, 
    onSearchClick,
    onSave,
    onDelete,
    zeroSearchValue}) {

    return (
        <>
        <SearchForm 
            isToggleShort={isToggleShort} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onToggleClick={onToggleClick} 
            onSearchClick={onSearchClick}/>
        <MoviesCardList 
            foundMovies={foundMovies} 
            isLoading={isLoading} 
            isSaved={true}
            onSave={onSave}
            onDelete={onDelete}
            zeroSearchValue={zeroSearchValue}
            />
        </>
    )
}

export default SavedMovies;