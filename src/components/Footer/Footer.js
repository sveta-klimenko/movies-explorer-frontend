import React from "react";
import "./Footer.css";

function Footer({isFooterVisible}) {
    return (
        <footer className="footer">
            {!isFooterVisible && <></>}
            {isFooterVisible && <>
                <h2 className="footer__title">Учебный проект Яндекс.Практикум и BeatFilm.</h2>
                <div className="footer__info">
                    <div className="footer__info-links">
                        <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer noopener" className="footer__link">Яндекс.Практикум</a>
                        <a href="https://github.com/" target="_blank" rel="noreferrer noopener" className="footer__link">Github</a>
                    </div>
                    <span className="footer__year">&copy; 2023</span>
                </div>
            </>}
        </footer>
    )
}

export default Footer;