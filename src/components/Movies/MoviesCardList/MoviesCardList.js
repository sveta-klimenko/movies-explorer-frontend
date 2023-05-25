import React, { useState, useEffect } from "react";
import {useLocation} from "react-router";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard.js'
import Preloader from "../Preloader/Preloader";

function MoviesCardList({foundMovies, savedMovies, isLoading, isSaved, onSave, onDelete, zeroSearchValue}) {
  const renderCards = () => {
    const render = {
      start: 12,
      load: 3
    };
    if (window.innerWidth < 1136) {
      render.start = 8;
      render.load = 2;
    }
    if (window.innerWidth < 712) {
      render.start = 5;
      render.load = 1;
    }
    return render;
  }

  const render = renderCards();

  const [MoviesAmount, setMoviesAmount] = useState(render.start);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [allMoviesRendered, setAllMoviesRendered] = useState(true);

  function addMovies() {
    setMoviesAmount(MoviesAmount + render.load);
    setMoviesToRender(foundMovies.slice(0, MoviesAmount));
  }

  const changeCounter = () => {
    const render = renderCards();
    setMoviesAmount(MoviesAmount + render.load);
    setAllMoviesRendered(MoviesAmount >= foundMovies.length);
    addMovies();
  }

useEffect(() => {
      if (foundMovies) {
        setMoviesToRender(foundMovies.slice(0, MoviesAmount));
        setAllMoviesRendered(MoviesAmount >= foundMovies.length);
      } else {setMoviesToRender([])}
  }, [foundMovies, MoviesAmount])

  const location = useLocation();
  const routeSaved = location.pathname === '/saved-movies';

  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__list">
        {isLoading && <Preloader/>}
        {!zeroSearchValue && !isLoading && !routeSaved && moviesToRender && moviesToRender.map((card) =>
              <MoviesCard key={card.id}
              card={savedMovies.some((element) => element.movieId === card.id) ? savedMovies.filter((element) => element.movieId === card.id)[0] : card} isSaved={savedMovies.some((element) => element.movieId === card.id)} onSave={onSave} onDelete={onDelete}
              />
            )}
        {!isLoading && routeSaved && moviesToRender && moviesToRender.map((card) => 
              <MoviesCard key={card.movieId}
              card={card} savedRoute={routeSaved} isSaved={isSaved} onSave={onSave} onDelete={onDelete}
              />
            )}
        {!zeroSearchValue && !foundMovies && <span className="movies-card-list__not-found">Ничего не найдено</span>}
        {!routeSaved && zeroSearchValue && foundMovies && <span className="movies-card-list__not-found">Нужно ввести ключевое слово</span>}
      </ul>
      {!zeroSearchValue && !allMoviesRendered && <button className="movies-card-list__load-more" onClick={changeCounter}>     
      Еще
      </button>}
      {allMoviesRendered && <div className="movies-card-list__free-space">     
      </div>}
    </div>
  );
}

export default MoviesCardList;