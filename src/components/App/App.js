import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main.js';
import MainFilm from '../MainFilm/MainFilm.js';
import MainProfile from '../MainProfile/MainProfile.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/movies" element={<MainFilm/>} />
            </Routes>
      <Footer/>
    </div>
  );
}

export default App;
