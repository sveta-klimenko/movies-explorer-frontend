import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList({isSaved}) {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__list">     
        <MoviesCard isLiked={true} isSaved={isSaved}/>
        <MoviesCard isLiked={true} isSaved={isSaved}/>
        <MoviesCard isSaved={isSaved}/>
        <MoviesCard isSaved={isSaved}/>
      </ul>
      {!isSaved && <button className="movies-card-list__load-more">     
      Еще
      </button>}
      {isSaved && <div className="movies-card-list__free-space">     
      </div>}
    </div>
  );
}

export default MoviesCardList;