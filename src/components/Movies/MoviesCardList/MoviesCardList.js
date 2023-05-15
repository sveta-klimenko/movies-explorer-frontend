import React, { useState, useEffect } from "react";
import {useLocation} from "react-router";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard.js'
import Preloader from "../Preloader/Preloader";

function MoviesCardList({foundMovies, isLoading, isSaved, onSave, onDelete}) {
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

  const location = useLocation();
  const savedRoute = location.pathname === "/saved-movies";

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

  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__list">
        {isLoading && <Preloader/>}
        {!isLoading && moviesToRender && moviesToRender.map((card) =>
              <MoviesCard key={card.id}
              card={card} savedRoute={savedRoute} isSaved={isSaved} onSave={onSave} onDelete={onDelete} 
              />
            )}
        {!foundMovies && <span className="movies-card-list__not-found">Ничего не найдено</span>}
      </ul>
      {!allMoviesRendered && <button className="movies-card-list__load-more" onClick={changeCounter}>     
      Еще
      </button>}
      {allMoviesRendered && <div className="movies-card-list__free-space">     
      </div>}
    </div>
  );
}

export default MoviesCardList;