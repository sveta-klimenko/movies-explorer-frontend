import React, { useState } from "react";
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Auth/Register.js';
import Login from '../Auth/Login';
import { Routes, Route } from 'react-router-dom';
import {useLocation} from "react-router";
import useIsMobile from '../../utils/hooks.js';

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isToggleShort, setisToggleShort] = useState(false);

  const location = useLocation();
  const isBurger = useIsMobile();
  
  const isFooterVisible = !["/profile", "/signup", "/signin"].includes(location.pathname);
  const isHeaderVisible = !["/signup", "/signin"].includes(location.pathname);

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function handleCloseClick(){
    setIsBurgerOpen(false);
  }

  function handleToggleClick(){
    setisToggleShort(!isToggleShort);
  }

  return (
    <div className="App">
      <Header 
        isAutorized = {false}
        isHeaderVisible={isHeaderVisible} 
        isBurgerOpen={isBurgerOpen} 
        onClick={handleBurgerClick} 
        onClose={handleCloseClick}/>
      <Header 
        isAutorized = {true}
        isBurger = {isBurger}
        isHeaderVisible={isHeaderVisible} 
        isBurgerOpen={isBurgerOpen} 
        onClick={handleBurgerClick} 
        onClose={handleCloseClick}/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies isToggleShort={isToggleShort} onToggleClick={handleToggleClick}/>} />
        <Route path="/saved-movies" element={<SavedMovies isToggleShort={isToggleShort} onToggleClick={handleToggleClick}/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/signin" element={<Login/>} />
      </Routes>
      <Footer isFooterVisible={isFooterVisible}/>
    </div>
  );
}

export default App;
