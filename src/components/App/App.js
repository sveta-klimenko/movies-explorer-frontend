import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../Movies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/movies" element={<Movies/>} />
                <Route path="/savedmovies" element={<SavedMovies/>} />
            </Routes>
      <Footer/>
    </div>
  );
}

export default App;
