import React from "react";
import "./MoviesCard.css";
import imageTest from "../../../images/image1.png"

function MoviesCard( {card, savedRoute, isSaved, onSave, onDelete} ) { 
  
  const hours = card.duration >= 60 ? `${Math.floor(card.duration / 60)} ч ` : '';
  const minutes = card.duration === 60 ? '' : `${card.duration % 60} м`;
  const duration = hours + minutes; 

  let likeClass;
  let altText;
  let buttonTitle;
  let isDelete;

  if (isSaved) {
    likeClass = "movies-card__button movies-card__button_type_unsave";
    altText = "Удалить из сохраненных";
    buttonTitle = "";
    isDelete = true;
  } else {
    likeClass = "movies-card__button movies-card__button_type_save";
    altText = "Сохранить";
    buttonTitle = "Сохранить";
    isDelete = false;
  }
  if (savedRoute) {
    likeClass = "movies-card__button movies-card__button_type_delete";
    altText = "Удалить из сохраненных";
    buttonTitle = "";
    isDelete = true;
  }

 function handleClick(movie) {
  isDelete ? onDelete(movie) : onSave(movie)
 }

  return (
    <li className="movies-card">     
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <span className="movies-card__duration">{duration}</span>
        </div>
        <a
        target="_blank"
        href={card.trailerLink}
        rel="noopener noreferrer"
        className="movies-card__image-link"
        >
          <img
            src={isSaved ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
            alt={card.nameRU}
            title={card.nameRU}
            className="movies-card__image"
          />
        </a>

        <button
                type="button"
                className={likeClass}
                title={altText}
                onClick={() => handleClick(card)}
        >{buttonTitle}</button>
      </div>
    </li>
    
  );
}

export default MoviesCard;