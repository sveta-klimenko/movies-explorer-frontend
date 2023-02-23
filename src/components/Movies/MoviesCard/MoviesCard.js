import React from "react";
import "./MoviesCard.css";
import imageTest from "../../../images/image1.png"

function MoviesCard({ image, title, duration, isLiked = false, isSaved = false }) {

  let likeClass;
  let altText;
  let buttonTitle;

  if (isLiked) {
    likeClass = "movies-card__button movies-card__button_type_unsave";
    altText = "Удалить из сохраненных"
    buttonTitle = "";
  } else {
    likeClass = "movies-card__button movies-card__button_type_save";
    altText = "Сохранить"
    buttonTitle = "Сохранить"

  }
  if (isSaved) {
    likeClass = "movies-card__button movies-card__button_type_delete";
    altText = "Удалить из сохраненных"
    buttonTitle = "";
  }

  return (
    <li className="movies-card">     
      <div className="movies-card__description">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{title = "В погоне за Бенкси"}</h2>
          <span className="movies-card__duration">{duration = "27 минут"}</span>
        </div>
        <a
        target="_blank"
        href="https://www.youtube.com"
        rel="noopener noreferrer"
        className="movies-card__image-link"
        >
          <img
            src={image = imageTest}
            alt={title}
            title={title}
            className="movies-card__image"
          />
        </a>

        <button
                type="button"
                className={likeClass}
                title={altText}
        >{buttonTitle}</button>
      </div>
    </li>
    
  );
}

export default MoviesCard;