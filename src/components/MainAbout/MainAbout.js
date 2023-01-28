import React from 'react';
import './MainAbout.css';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';


function MainAbout() {
    return (
        <>
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        </>
    )
}

export default MainAbout;