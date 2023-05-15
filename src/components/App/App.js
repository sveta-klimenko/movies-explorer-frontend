import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Redirect } from 'react-router-dom';
import './App.css';
import moviesApi from '../../utils/MoviesApi.js';
import mainApi from "../../utils/MainApi";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Auth/Register.js';
import Login from '../Auth/Login.js';
import NotFound from "../NotFound/NotFound.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { ProtectedLoggedRoute } from "../ProtectedRoute/ProtectedLoggedRoute";
import {useLocation} from "react-router";
import useIsMobile from '../../utils/hooks.js';
import { CurrentUserContext, defaultUserInfo } from '../../contexts/CurrentUserContext.js';
import { noSavedMovies, searchError, searchErrorMovieNotFound, searchNoValues } from '../../utils/messages_errors.js';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isToggleShort, setisToggleShort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [savedMoviesErrorMessage, setSavedMoviesErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState(defaultUserInfo);
  const [isAutorized, setIsAutorized] = useState(false);

  const location = useLocation();
  const isBurger = useIsMobile();
  const navigate = useNavigate();
  
  const shortFilmDuration = 40;

  const isFooterVisible = ["/", "/movies", "/saved-movies",].includes(location.pathname);
  const isHeaderVisible = ["/", "/movies", "/saved-movies", "/profile"].includes(location.pathname);

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue'));
    setisToggleShort(JSON.parse(localStorage.getItem('isToggleShort')));
    setFoundMovies(JSON.parse(localStorage.getItem('foundMovies')));
    }, [isAutorized])

  /*useEffect(() => {
    localStorage.setItem('isToggleShort', isToggleShort);
    localStorage.setItem('searchValue', searchValue);
    if (foundMovies === undefined) {
      localStorage.setItem('foundMovies', JSON.stringify(null))
    } else {localStorage.setItem('foundMovies', JSON.stringify(foundMovies));}
    }, [isToggleShort,searchValue,foundMovies])*/

  function checkToken() {
    const token = localStorage.getItem('jwt') || '';
    mainApi.setToken(token);
    if (token) {
      mainApi.getUser()
        .then((user) => {
          if (user) {
            console.log(user)
            setIsAutorized(true);
            setCurrentUser(user);
          } else {
            handleLogout();
          }
        })
        .catch((err) => {
          handleLogout();
        });
    } else {
      handleLogout();
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  function handleRegistration(credentials){
      mainApi.register(credentials)
      .then((result) => {
        setCurrentUser(result);
        console.log(credentials.email, credentials.password)
        return mainApi.login({ email: credentials.email, password: credentials.password })
      })
      .then((result) => {
        localStorage.setItem('jwt', result.token);
        setIsAutorized(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function handleLogin(credentials) {
    mainApi.login(credentials)
      .then((result) => {
        localStorage.setItem('jwt', result.token);
        setIsAutorized(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  function handleLogout() {
    setIsBurgerOpen(false);
    setisToggleShort(false);
    setIsLoading(false);
    setMovies([]);
    setShortMovies([]);
    setFoundMovies([]);
    setSearchValue('');
    setErrorMessage('');
    setSavedMoviesErrorMessage('');
    setCurrentUser(defaultUserInfo);
    setIsAutorized(false);
    setCurrentUser(defaultUserInfo);
    localStorage.clear();
    navigate('/');
  }

  function handleUpdateUser(user) {
    const token = localStorage.getItem('jwt') || '';
    mainApi.setToken(token);
    mainApi.setUser(user.name, user.email)
      .then((userUpdateData) => {
        setCurrentUser( { ...currentUser, data: userUpdateData } );
      })
      .catch((err) => {
        console.log(err.message)
      })
  };

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function handleCloseClick(){
    setIsBurgerOpen(false);
  }

  function handleToggleClick(){
    setisToggleShort(!isToggleShort);
    localStorage.setItem('isToggleShort', !isToggleShort);
  }

  function handleSearchClick(inputValue){
    localStorage.setItem('isToggleShort', isToggleShort);
    setIsLoading(true);
    localStorage.setItem('searchValue', inputValue);
    moviesApi.getMovies().then(res => {
      console.log('res', res)
      setMovies(res);
      checkIsMovieShort(res);
      setFoundMovies(findByValue(inputValue, isToggleShort? shortMovies : res));
      const foundMovies = findByValue(inputValue, isToggleShort? shortMovies : res);
      console.log('foundMovies', foundMovies)
      if (foundMovies === undefined) {
        localStorage.setItem('foundMovies', JSON.stringify(null))
      } else {localStorage.setItem('foundMovies', JSON.stringify(foundMovies));}
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => setIsLoading(false));
}

  function checkIsMovieShort(movies) {
    setShortMovies(movies.filter(function (item) {
			return item.duration <= shortFilmDuration;
		}))
  }

  function findByValue(value, data) {
    const route = location.pathname;
    const results = data.filter(function (item) {
     return item.nameRU.toLowerCase().includes(value.toLowerCase()) || item.nameEN.toLowerCase().includes(value.toLowerCase());
   });
   console.log('results', results)
    if (results.length === 0) {
     route === '/movies' ? setErrorMessage(searchErrorMovieNotFound) : setSavedMoviesErrorMessage(searchErrorMovieNotFound);
     return null;
   } else {
     return results;
   }
 }

 function handleSaveMovie(movie) {
  const token = localStorage.getItem('jwt') || '';
  mainApi.setToken(token);
		mainApi.saveMovie(movie)
		.then((res) => {
			setSavedMovies([res.movie, ...savedMovies]);
		}).catch((err) => console.log(err.message))
	}

	function handleDeleteMovie (movie) {
    const token = localStorage.getItem('jwt') || '';
    mainApi.setToken(token);
		mainApi.deleteMovie(movie._id)
		.then((res) => {
			const newList = savedMovies.filter((item) => {
				return !(item._id === movie._id);
			})
			setSavedMovies(newList);
		}).catch((err) => console.log(err.message));
	}


  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header 
          isAutorized = {isAutorized}
          isBurger = {isBurger}
          isHeaderVisible={isHeaderVisible} 
          isBurgerOpen={isBurgerOpen} 
          onClick={handleBurgerClick} 
          onClose={handleCloseClick}
          />
        <main>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/movies" element={
              <ProtectedRoute isAutorized={isAutorized}>
                {<Movies 
                  foundMovies={foundMovies}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue} 
                  isToggleShort={isToggleShort}
                  isLoading={isLoading} 
                  onToggleClick={handleToggleClick} 
                  onSearchClick={handleSearchClick}
                  onSave={handleSaveMovie}
                  onDelete={handleDeleteMovie}/>}
              </ProtectedRoute>}
            />
            <Route path="/saved-movies" element={
              <ProtectedRoute isAutorized={isAutorized}>
                {<SavedMovies 
                  foundMovies={foundMovies}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue} 
                  isToggleShort={isToggleShort}
                  isLoading={isLoading} 
                  onToggleClick={handleToggleClick} 
                  onSearchClick={handleSearchClick}
                  onDelete={handleDeleteMovie}/>} 
              </ProtectedRoute>}
            />
            <Route path="/profile" element={
              <ProtectedRoute isAutorized={isAutorized}>
                {<Profile
                  onLogoutClick={handleLogout}
                  onChangeClick={handleUpdateUser}/>}
              </ProtectedRoute>}
            />
            <Route path="/signup" element={
              <ProtectedLoggedRoute isAutorized={isAutorized}>
                {<Register
                  onClick={handleRegistration}/>} 
              </ProtectedLoggedRoute>}
            />
            <Route path="/signin" element={
              <ProtectedLoggedRoute isAutorized={isAutorized}>
                {<Login
                  onClick={handleLogin}/>}
            </ProtectedLoggedRoute>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer isFooterVisible={isFooterVisible}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
