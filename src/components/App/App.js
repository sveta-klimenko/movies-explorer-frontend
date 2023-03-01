import React, { useState } from "react";
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import { Routes, Route } from 'react-router-dom';
import {useLocation} from "react-router"

function App() {
  const [isAddBurgerOpen, setIsBurgerOpen] = useState(false)
  const location = useLocation()
  const isFooterVisible = !["/profile", "/signup", "/signin"].includes(location.pathname)
  const isHeaderVisible = !["/signup", "/signin"].includes(location.pathname)

  function handleBurgerClick() {
    setIsBurgerOpen(true);
  }

  function handleCloseClick(){
    setIsBurgerOpen(false);
  }



  return (
    <div className="App">
      <Header 
        isHeaderVisible={isHeaderVisible} 
        isBurgerOpen={isAddBurgerOpen} 
        onClick={handleBurgerClick} 
        onClose={handleCloseClick}/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/saved-movies" element={<SavedMovies/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer isFooterVisible={isFooterVisible}/>
    </div>
  );
}

export default App;
