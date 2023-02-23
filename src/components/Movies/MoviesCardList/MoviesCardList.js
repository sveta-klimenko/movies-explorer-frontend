import React from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList() {

  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__list">     
        <MoviesCard isLiked={true}/>
        <MoviesCard isLiked={true}/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
      <button className="movies-card-list__load-more">     
      Еще
      </button>
    </div>
  );
}

export default MoviesCardList;